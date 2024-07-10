'use client'

import React, { createContext, useReducer } from 'react';
import { ChainQueryConfig, ChainQueryState, ChainQueryAction } from '../types/chain-query';

const ChainQueryStateContext = createContext<ChainQueryState | undefined>(undefined);
const ChainQueryDispatchContext = createContext<React.Dispatch<ChainQueryAction> | undefined>(undefined);

const defaultConfig = {
  chainId: "kaiyo-1",
  rpcUrl: "https://rpc-kujira.mintthemoon.xyz",
}

const initialState: ChainQueryState = {
  stargateClient: null,
  cosmWasmClient: null,
  isConnected: false,
  error: null,
  config: defaultConfig,
};

function chainQueryReducer(state: ChainQueryState, action: ChainQueryAction): ChainQueryState {
  switch (action.type) {
    case 'SET_CLIENTS':
      return { 
        ...state, 
        stargateClient: action.payload.stargateClient,
        cosmWasmClient: action.payload.cosmWasmClient,
        isConnected: true 
      };
    case 'SET_CONNECTED':
      return { ...state, isConnected: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export const ChainQueryProvider: React.FC<{ children: React.ReactNode; config: ChainQueryConfig }> = ({ children, config }) => {
  const [state, dispatch] = useReducer(chainQueryReducer, { ...initialState, config });

  return (
    <ChainQueryStateContext.Provider value={state}>
      <ChainQueryDispatchContext.Provider value={dispatch}>
        {children}
      </ChainQueryDispatchContext.Provider>
    </ChainQueryStateContext.Provider>
  );
};

export const useChainQueryState = () => {
  const context = React.useContext(ChainQueryStateContext);
  if (context === undefined) {
    throw new Error('useChainQueryState must be used within a ChainQueryProvider');
  }
  return context;
};

export const useChainQueryDispatch = () => {
  const context = React.useContext(ChainQueryDispatchContext);
  if (context === undefined) {
    throw new Error('useChainQueryDispatch must be used within a ChainQueryProvider');
  }
  return context;
};