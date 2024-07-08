'use client'

import React, { useState, useEffect } from 'react';
import { useWallet } from '../../hooks/use-wallet';
import { useBroadcast } from '../../hooks/use-broadcast';
import { WalletConfig } from '../../types/wallet';
import { WalletProvider } from '../../contexts/wallet-context';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "../dropdown-menu";
import { Button } from "../button";
import { WalletIcon, CopyIcon, Loader2Icon } from "lucide-react";
import { ScrollArea } from "../scroll-area";
import { formatAddress, formatTokenName, formatTokenAmount, getTokenIcon } from '../../utility/tokens';
import { sonarProvider, keplrProvider, PROVIDERS } from '../../utility/wallet/providers';
import { processRawBalances, TokenInfo } from '../../utility/tokens';

export { useWallet, useBroadcast, WalletProvider };

export interface WalletProps extends WalletConfig {}

export const Wallet: React.FC = () => {
  const { 
    isConnected, 
    isLoading, 
    address, 
    provider, 
    connect, 
    disconnect, 
    error,
    config,
    client
  } = useWallet();

  const [tokens, setTokens] = useState<Map<string, TokenInfo>>(new Map());

  useEffect(() => {
    async function fetchBalances() {
      if (isConnected && client && address) {
        const balances = await client.getAllBalances(address);
        const processedTokens = processRawBalances(config.chainId, balances);
        setTokens(processedTokens);
      }
    }
    fetchBalances();
  }, [isConnected, client, address, config.chainId]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You might want to add a visual feedback here, like a temporary tooltip
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-fit px-3 hover:bg-background"
          >
            {isLoading ? (
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <WalletIcon className="mr-2 h-4 w-4" />
            )}
            {isConnected ? formatAddress(address, true) : "Connect Wallet"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[240px]"
          sideOffset={5}
          forceMount
        >
        {isConnected ? (
          <>
            <DropdownMenuItem onClick={() => copyToClipboard(address)}>
              <div className="font-mono text-xs flex items-center">
                {formatAddress(address, false)}
                <CopyIcon className="ml-2 h-4 w-4" />
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <ScrollArea className="h-[200px]">
              <div className="p-1">
                {Array.from(tokens.values()).map((token, index) => (
                  <DropdownMenuItem key={index} className="flex items-center py-2">
                    <div className="w-6 h-6 mr-2 flex-shrink-0">
                      {getTokenIcon(config.chainId, token.baseDenom)}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="font-medium text-sm truncate">
                        {formatTokenName(token.displayDenom)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {formatTokenAmount(token.displayAmount)}
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </div>
            </ScrollArea>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={disconnect}>
              Disconnect
            </DropdownMenuItem>
          </>
        ) : (
          <div className="grid grid-cols-3 gap-1 p-1">
            {PROVIDERS.map((provider) => (
              <DropdownMenuItem
                key={provider.name}
                className="flex flex-col items-center justify-center h-24 cursor-pointer focus:outline-none px-1"
                onClick={() => connect(provider)}
              >
                <div className="w-12 h-12 mb-2 flex items-center justify-center">
                  <provider.icon className="w-full h-full" />
                </div>
                <span className="text-xs text-center">{provider.name}</span>
              </DropdownMenuItem>
            ))}
          </div>
        )}
        </DropdownMenuContent>
      </DropdownMenu>
      {error && <p className="text-red-500 mt-2">Error: {error.message}</p>}
    </>
  );
};