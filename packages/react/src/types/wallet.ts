import { SigningStargateClient } from "@cosmjs/stargate";
import { OfflineSigner } from "@cosmjs/proto-signing";
import { TokenInfo } from '../utility/tokens';
import { AccountData } from "@cosmjs/amino";

export interface WalletProvider {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface WalletConfig {
  chainId: string;
  rpcUrl: string;
  featuredTokens?: string[];
  maxTokens?: number;
}

export interface WalletState {
  isConnected: boolean;
  isLoading: boolean;
  address: string;
  provider: WalletProvider | null;
  client: SigningStargateClient | null;
  signer: OfflineSigner | null;
  tokens: Map<string, TokenInfo>;
  error: Error | null;
  config: WalletConfig;
  account: AccountData | null;
}

export type WalletAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'CONNECT'; payload: { address: string; provider: WalletProvider; signer: OfflineSigner; client: SigningStargateClient, account: AccountData } }
  | { type: 'DISCONNECT' }
  | { type: 'SET_TOKENS'; payload: Map<string, TokenInfo> }
  | { type: 'SET_ERROR'; payload: Error | null }
  | { type: 'CHANGE_ADDRESS'; payload: string };

export interface WalletConnector {
  connect: (config: WalletConfig) => Promise<{ address: string; signer: OfflineSigner }>;
  disconnect: () => Promise<void>;
  subscribe: (config: WalletConfig, onAddressChange: (newAddress: string) => void) => () => void;
}

export interface WalletProvider {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  connector: WalletConnector;
}
