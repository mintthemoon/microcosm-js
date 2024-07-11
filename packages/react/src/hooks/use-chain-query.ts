import { useEffect, useCallback } from 'react';
import { StargateClient } from '@cosmjs/stargate';
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { useChainQueryState, useChainQueryDispatch } from '../contexts/chain-query';
import { processRawBalances, TokenInfo } from '../utility/tokens';

export const useChainQuery = () => {
  const state = useChainQueryState();
  const dispatch = useChainQueryDispatch();

  useEffect(() => {
    const initClients = async () => {
      if (!state.stargateClient && !state.cosmWasmClient && !state.isConnected) {
        try {
          const stargateClient = await StargateClient.connect(state.config.rpcUrl);
          const cosmWasmClient = await CosmWasmClient.connect(state.config.rpcUrl);
          dispatch({ 
            type: 'SET_CLIENTS', 
            payload: { stargateClient, cosmWasmClient } 
          });
        } catch (error) {
          console.error('Failed to initialize clients:', error);
          dispatch({ type: 'SET_ERROR', payload: error as Error });
        }
      }
    };

    initClients();
  }, [state.stargateClient, state.cosmWasmClient, state.isConnected, state.config.rpcUrl, dispatch]);

  const queryBalances = useCallback(async (address: string): Promise<Map<string, TokenInfo>> => {
    if (!state.stargateClient || !state.isConnected) {
      throw new Error('StargateClient not initialized');
    }

    const balances = await state.stargateClient.getAllBalances(address);
    return processRawBalances(state.config.chainId, balances);
  }, [state.stargateClient, state.isConnected, state.config.chainId]);

  const queryContract = useCallback(async (contractAddress: string, query: Record<string, unknown> | string) => {
    if (!state.cosmWasmClient || !state.isConnected) {
      throw new Error('CosmWasmClient not initialized');
    }

    return await state.cosmWasmClient.queryContractSmart(contractAddress, query);
  }, [state.cosmWasmClient, state.isConnected]);

  return {
    ...state,
    queryBalances,
    queryContract,
  };
};
