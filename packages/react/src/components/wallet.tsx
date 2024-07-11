'use client'

import React, { useState, useEffect } from 'react';
import { useWallet } from '../hooks/use-wallet';
import { useChainQuery } from '../hooks/use-chain-query';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "./dropdown-menu";
import { Button } from "./button";
import { WalletIcon, CopyIcon, Loader2Icon } from "lucide-react";
import { ScrollArea } from "./scroll-area";
import { formatAddress, formatTokenName, formatTokenAmount, TokenIcon } from '../utility/tokens';
import { providers } from '../utility/wallet/providers';
import { TokenInfo } from '../utility/tokens';
import { cn } from '../utility';

export interface WalletProps {
  buttonClassName?: string;
  dropdownClassName?: string;
  dropdownAlign?: "start" | "center" | "end";
}

export const Wallet: React.FC<WalletProps> = ({ buttonClassName, dropdownClassName, dropdownAlign }) => {
  const { 
    isConnected: isWalletConnected, 
    isLoading, 
    address, 
    connect, 
    disconnect, 
    error,
    config,
  } = useWallet();
  const { 
    queryBalances,
    isConnected: isChainQueryConnected,
  } = useChainQuery();

  const [tokens, setTokens] = useState<Map<string, TokenInfo>>(new Map());
  const [displayTokens, setDisplayTokens] = useState<TokenInfo[]>([]);

  useEffect(() => {
    async function fetchBalances() {
      if (address && isChainQueryConnected) {
        const balances = await queryBalances(address);
        setTokens(balances);
      }
    }
    fetchBalances();
  }, [address, config.chainId, isChainQueryConnected]);

  useEffect(() => {
    const updateDisplayTokens = () => {
      if (config.featuredTokens && config.featuredTokens.length > 0) {
        const newDisplayTokens = config.featuredTokens
          .map(denom => tokens.get(denom))
          .filter((token): token is TokenInfo => token !== undefined);
        setDisplayTokens(newDisplayTokens);
      } else {
        const allTokens = Array.from(tokens.values());
        setDisplayTokens(config.maxTokens ? allTokens.slice(0, config.maxTokens) : allTokens);
      }
    };

    updateDisplayTokens();
  }, [tokens, config.featuredTokens, config.maxTokens]);

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
            className={cn("w-fit px-3 focus-visible:ring-0", buttonClassName)}
          >
            {isLoading ? (
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <WalletIcon className="mr-2 h-4 w-4" />
            )}
            {isWalletConnected ? formatAddress(address, true) : "Connect Wallet"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={cn("w-[240px]", dropdownClassName)}
          sideOffset={5}
          forceMount
          align={dropdownAlign || "end"}
        >
        {isWalletConnected ? (
          <>
            <DropdownMenuItem onClick={() => copyToClipboard(address)}>
              <div className="font-mono text-xs flex items-center">
                {formatAddress(address, false)}
                <CopyIcon className="ml-2 h-4 w-4" />
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <ScrollArea maxHeight={200}>
              <div className="p-1">
                {displayTokens.map((token, index) => (
                  <DropdownMenuItem key={index} className="flex items-center py-2">
                    <div className="w-6 h-6 mr-2 flex-shrink-0">
                      <TokenIcon name={token.baseDenom} chainId={config.chainId} />
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
            {providers.map((provider) => (
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