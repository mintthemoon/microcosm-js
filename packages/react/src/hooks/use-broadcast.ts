// packages/react/src/hooks/use-broadcast.ts
'use client'

import { useCallback } from 'react';
import { useWallet } from './use-wallet';
import { EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { coins } from "@cosmjs/amino";
import { chainDataProvider } from '../utility/chain-registry';

export const useBroadcast = () => {
  const { client, config, account } = useWallet();

  const broadcast = useCallback(async (messages: EncodeObject[], memo?: string): Promise<DeliverTxResponse> => {
    if (!client || !account) {
      throw new Error("Wallet is not connected");
    }

    try {
      const chainData = await chainDataProvider.getChainData(config.chainId);
      if (!chainData) {
        throw new Error(`Unable to find chain data for ${config.chainId}`);
      }

      const gasEstimate = await client.simulate(account.address, messages, memo);
      const gasPrice = chainDataProvider.getGasPrice(chainData);
      const feeAmount = Math.ceil(gasEstimate * gasPrice.amount);
      const fee: StdFee = {
        amount: coins(feeAmount.toString(), gasPrice.denom),
        gas: gasEstimate.toString()
      };

      return await client.signAndBroadcast(account.address, messages, fee, memo);
    } catch (error) {
      console.error("Broadcast failed:", error);
      throw error;
    }
  }, [client, config.chainId, account]);

  return { broadcast };
}