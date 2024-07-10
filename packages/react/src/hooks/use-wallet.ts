// packages/react/src/hooks/use-wallet.ts
'use client'

import { useCallback, useEffect } from 'react';
import { useWalletState, useWalletDispatch } from '../contexts/wallet';
import { useChainQuery } from './use-chain-query';
import { WalletProvider } from '../types/wallet';
import { SigningStargateClient } from '@cosmjs/stargate';
import { saveWalletConnection, getWalletConnection, clearWalletConnection } from '../utility/storage';
import { providers } from '../utility/wallet/providers';

export const useWallet = () => {
  const state = useWalletState();
  const dispatch = useWalletDispatch();
  const { queryBalances, isConnected: isChainQueryConnected } = useChainQuery();

  const setLoading = useCallback((isLoading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: isLoading });
  }, [dispatch]);

  const connect = useCallback(async (provider: WalletProvider) => {
    setLoading(true);
    try {
      const result = await provider.connector.connect(state.config);
      const [account] = await result.signer.getAccounts();
      if (!account) {
        throw new Error('No account found');
      }
      const client = await SigningStargateClient.connectWithSigner(state.config.rpcUrl, result.signer);
      
      dispatch({ 
        type: 'CONNECT', 
        payload: { 
          address: result.address, 
          provider, 
          signer: result.signer, 
          client,
          account,
        } 
      });
      saveWalletConnection(provider.name);
    } catch (error) {
      if (error instanceof Error && error.message === "User cancelled connection") {
        console.log(error.message);
      } else {
        dispatch({ type: 'SET_ERROR', payload: error as Error });
      }
    } finally {
      setLoading(false);
    }
  }, [dispatch, state.config, setLoading]);

  const disconnect = useCallback(async () => {
    if (state.provider) {
      setLoading(true);
      try {
        await state.provider.connector.disconnect();
        dispatch({ type: 'DISCONNECT' });
        clearWalletConnection();
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error as Error });
      } finally {
        setLoading(false);
      }
    }
  }, [dispatch, state.provider, setLoading]);

  const updateTokens = useCallback(async () => {
    if (isChainQueryConnected && state.isConnected && state.address) {
      try {
        const tokens = await queryBalances(state.address);
        dispatch({ type: 'SET_TOKENS', payload: tokens });
      } catch (error) {
        console.error('Failed to fetch token balances:', error);
      }
    }
  }, [state.isConnected, state.address, isChainQueryConnected, queryBalances, dispatch]);

  useEffect(() => {
    updateTokens();
  }, [updateTokens]);

  useEffect(() => {
    if (state.isConnected && state.provider) {
      const cleanup = state.provider.connector.subscribe(state.config, (newAddress) => {
        dispatch({ type: 'CHANGE_ADDRESS', payload: newAddress });
        updateTokens();
      });
      return cleanup;
    }
  }, [state.isConnected, state.provider, state.config, dispatch]);

  useEffect(() => {
    const initializeWallet = async () => {
      const storedConnection = getWalletConnection();
      if (storedConnection) {
        const provider = providers.find(p => p.name === storedConnection.providerName);
        if (provider) {
          try {
            await connect(provider);
          } catch (error) {
            console.error('Failed to restore wallet connection:', error);
            clearWalletConnection();
          }
        }
      }
    };

    initializeWallet();
  }, [connect]);

  return {
    ...state,
    connect,
    disconnect,
  };
};