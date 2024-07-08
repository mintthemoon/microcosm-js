'use client'

import React, { createContext, useReducer, useContext } from 'react';
import { WalletState, WalletAction, WalletConfig } from '../types/wallet';

const WalletStateContext = createContext<WalletState | undefined>(undefined);
const WalletDispatchContext = createContext<React.Dispatch<WalletAction> | undefined>(undefined);

const defaultConfig:  WalletConfig = {
  chainId: "kaiyo-1",
  rpcUrl: "https://rpc-kujira.mintthemoon.xyz",
}

const initialState: WalletState = {
  isConnected: false,
  isLoading: false,
  address: '',
  provider: null,
  client: null,
  signer: null,
  account: null,
  tokens: new Map(),
  error: null,
  config: defaultConfig,
};

function walletReducer(state: WalletState, action: WalletAction): WalletState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'CONNECT':
      return {
        ...state,
        isConnected: true,
        address: action.payload.address,
        provider: action.payload.provider,
        signer: action.payload.signer,
        client: action.payload.client,
        account: action.payload.account,
        error: null,
      };
    case 'DISCONNECT':
      return {
        ...initialState,
      };
    case 'SET_TOKENS':
      return { ...state, tokens: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export const WalletProvider: React.FC<{ children: React.ReactNode; config: WalletConfig }> = ({ children, config }) => {
  const [state, dispatch] = useReducer(walletReducer, {
    ...initialState,
    config,
  });

  return (
    <WalletStateContext.Provider value={state}>
      <WalletDispatchContext.Provider value={dispatch}>
        {children}
      </WalletDispatchContext.Provider>
    </WalletStateContext.Provider>
  );
};

export const useWalletState = () => {
  const context = useContext(WalletStateContext);
  if (context === undefined) {
    throw new Error('useWalletState must be used within a WalletProvider');
  }
  return context;
};

export const useWalletDispatch = () => {
  const context = useContext(WalletDispatchContext);
  if (context === undefined) {
    throw new Error('useWalletDispatch must be used within a WalletProvider');
  }
  return context;
};