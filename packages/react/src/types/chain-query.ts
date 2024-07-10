import { StargateClient } from "@cosmjs/stargate";
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";

export interface ChainQueryConfig {
  chainId: string;
  rpcUrl: string;
}

export interface ChainQueryState {
  stargateClient: StargateClient | null;
  cosmWasmClient: CosmWasmClient | null;
  isConnected: boolean;
  error: Error | null;
  config: ChainQueryConfig;
}

export type ChainQueryAction =
  | {
      type: "SET_CLIENTS";
      payload: {
        stargateClient: StargateClient;
        cosmWasmClient: CosmWasmClient;
      };
    }
  | { type: "SET_CONNECTED"; payload: boolean }
  | { type: "SET_ERROR"; payload: Error | null };
