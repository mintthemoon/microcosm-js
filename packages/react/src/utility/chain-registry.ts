// src/utility/chain-registry.ts
import { chains, assets } from 'chain-registry';
import { ChainRegistryClient } from '@chain-registry/client';
import { Chain, AssetList, Asset } from '@chain-registry/types';

interface AssetInfo {
  symbol: string;
  decimals: number;
  displayDenom: string;
  displayExponent: number;
  baseExponent: number;
  logo_URIs?: {
    png?: string;
    svg?: string;
  };
}

export class ChainDataProvider {
  private client: ChainRegistryClient;
  private cachedChains: Map<string, Chain> = new Map();
  private cachedAssetMaps: Map<string, Map<string, AssetInfo>> = new Map();
  private fetchPromises: Map<string, Promise<void>> = new Map();
  private chainIdToNameMap: Map<string, string> = new Map();
  private chainNameToIdMap: Map<string, string> = new Map();

  constructor() {
    this.client = new ChainRegistryClient({ chainNames: [] });
    // Pre-load bundled data and create bidirectional chain_id/chain_name mapping
    chains.forEach(chain => {
      this.cachedChains.set(chain.chain_id, chain);
      this.chainIdToNameMap.set(chain.chain_id, chain.chain_name);
      this.chainNameToIdMap.set(chain.chain_name, chain.chain_id);
    });
    assets.forEach(assetList => {
      const chainId = this.getChainIdFromName(assetList.chain_name);
      if (chainId) {
        this.createAssetMap(chainId, assetList);
      }
    });
  }

  private getChainIdFromName(chainName: string): string | undefined {
    return this.chainNameToIdMap.get(chainName);
  }

  private getChainNameFromId(chainId: string): string | undefined {
    return this.chainIdToNameMap.get(chainId);
  }

  private async fetchChainData(chainId: string): Promise<void> {
    if (this.fetchPromises.has(chainId)) {
      await this.fetchPromises.get(chainId);
      return;
    }

    const fetchPromise = (async () => {
      try {
        await this.client.fetchUrls();
        const chainData = this.client.getChain(chainId);
        if (chainData) {
          this.cachedChains.set(chainId, chainData);
          this.chainIdToNameMap.set(chainId, chainData.chain_name);
          this.chainNameToIdMap.set(chainData.chain_name, chainId);
        }
        const chainName = this.getChainNameFromId(chainId);
        if (chainName) {
          const assetList = this.client.getChainAssetList(chainName);
          if (assetList) this.createAssetMap(chainId, assetList);
        }
      } catch (error) {
        console.warn(`Failed to fetch data for ${chainId}`, error);
      } finally {
        this.fetchPromises.delete(chainId);
      }
    })();

    this.fetchPromises.set(chainId, fetchPromise);
    await fetchPromise;
  }

  private createAssetMap(chainId: string, assetList: AssetList): void {
    const assetMap = new Map<string, AssetInfo>();
    assetList.assets.forEach(asset => {
      const baseUnit = asset.denom_units.find(unit => unit.denom === asset.base);
      const displayUnit = asset.denom_units.find(unit => unit.denom === asset.display);
      
      if (baseUnit && displayUnit) {
        assetMap.set(asset.base, {
          symbol: asset.symbol,
          decimals: displayUnit.exponent,
          displayDenom: asset.display,
          displayExponent: displayUnit.exponent,
          baseExponent: baseUnit.exponent,
          logo_URIs: asset.logo_URIs
        });
      }
    });
    this.cachedAssetMaps.set(chainId, assetMap);
  }

  async getChainData(chainId: string): Promise<Chain | undefined> {
    if (!this.cachedChains.has(chainId)) {
      await this.fetchChainData(chainId);
    }
    return this.cachedChains.get(chainId);
  }

  getAssetInfo(chainId: string, denom: string): AssetInfo | undefined {
    return this.cachedAssetMaps.get(chainId)?.get(denom);
  }

  async refreshAssetList(chainId: string): Promise<void> {
    await this.fetchChainData(chainId);
  }

  getAssetIcon(chainId: string, denom: string): string | undefined {
    const assetMap = this.cachedAssetMaps.get(chainId);
    if (!assetMap) return undefined;

    const asset = assetMap.get(denom);
    return asset?.logo_URIs?.svg || asset?.logo_URIs?.png;
  }

  getGasPrice(chainData: Chain): { amount: number; denom: string } {
    const feeToken = chainData.fees?.fee_tokens?.[0];
    if (feeToken) {
      return {
        amount: feeToken.average_gas_price || 0.0034,
        denom: feeToken.denom || 'ukuji'
      };
    }
    return { amount: 0.0034, denom: 'ukuji' };
  }
}

export const chainDataProvider = new ChainDataProvider();