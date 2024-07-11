import { chainDataProvider } from './chain-registry';
import { FactoryIcon, CircleHelpIcon } from "lucide-react";
import { Coin } from "@cosmjs/amino";
import React from 'react';

export interface TokenInfo {
  baseDenom: string;
  displayDenom: string;
  baseAmount: number;
  displayAmount: number;
}

export const TOKEN_DISPLAY_DECIMALS = 2;

export function formatString(str: string, frontChars: number, backChars: number): string {
  if (str.length <= frontChars + backChars) {
    return str;
  }
  return `${str.slice(0, frontChars)}...${str.slice(-backChars)}`;
}

export function formatAddress(address: string, isButton: boolean): string {
  return isButton
    ? formatString(address, 9, 6)
    : formatString(address, 12, 8);
}

export function formatTokenName(denom: string): string {
  if (denom.startsWith("factory/")) {
    const parts = denom.split("/");
    if (parts.length === 3 && parts[1] !== undefined && parts[2] !== undefined) {
      const contractAddress = formatString(parts[1], 4, 3);
      const tokenName = formatString(parts[2], 10, 5);
      return `${tokenName} (${contractAddress})`;
    }
  }
  return denom;
}

export function formatTokenAmount(amount: number): string {
  return amount.toLocaleString(undefined, {
    minimumFractionDigits: TOKEN_DISPLAY_DECIMALS,
    maximumFractionDigits: TOKEN_DISPLAY_DECIMALS,
    useGrouping: true,
  });
}

export interface TokenIconProps {
  chainId: string;
  name: string;
}

export const TokenIcon = ({chainId, name}: TokenIconProps) => {
  const iconUrl = chainDataProvider.getAssetIcon(chainId, name);
  
  if (iconUrl) {
    return <img src={iconUrl} alt={name} className="token-icon w-full h-full object-contain" />;
  } else if (name.startsWith("factory/")) {
    return <FactoryIcon className="token-icon w-full h-full" />;
  } else {
    return <CircleHelpIcon className="token-icon w-full h-full" />;
  }
}

export function resolveTokenName(chainId: string, denom: string): string {
  const assetInfo = chainDataProvider.getAssetInfo(chainId, denom);
  return assetInfo? assetInfo.symbol : denom;
}

export interface TokenProps {
  chainId: string;
  name: string;
  amount: number | undefined;
}

export const Token = ({ chainId, name, amount }: TokenProps) => {
  const displayName = formatTokenName(resolveTokenName(chainId, name));
  return (
    <div className="token flex items-center">
      <TokenIcon chainId={chainId} name={name} />
      {amount ? <div className="token-amount ml-2">{formatTokenAmount(amount)}</div> : null}
      <div className="token-name ml-2">{displayName}</div>
    </div>
  );
}

export function processRawBalances(chainId: string, rawBalances: readonly Coin[]): Map<string, TokenInfo> {
  const tokenMap = new Map<string, TokenInfo>();
  
  rawBalances.forEach(balance => {
    const assetInfo = chainDataProvider.getAssetInfo(chainId, balance.denom);
    if (assetInfo) {
      const baseAmount = Number(balance.amount);
      const scaleFactor = Math.pow(10, assetInfo.displayExponent - assetInfo.baseExponent);
      const displayAmount = baseAmount / scaleFactor;
      
      tokenMap.set(balance.denom, {
        baseDenom: balance.denom,
        displayDenom: assetInfo.symbol,
        baseAmount,
        displayAmount
      });
    } else {
      tokenMap.set(balance.denom, {
        baseDenom: balance.denom,
        displayDenom: balance.denom,
        baseAmount: Number(balance.amount),
        displayAmount: Number(balance.amount)
      });
    }
  });

  return tokenMap;
}