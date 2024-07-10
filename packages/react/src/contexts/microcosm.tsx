import React from "react";
import { WalletConfig, ChainQueryConfig, MicrocosmConfig } from "../types";
import { WalletProvider } from "./wallet";
import { ChainQueryProvider } from "./chain-query";

export const MicrocosmProvider: React.FC<{
  children: React.ReactNode;
  config: MicrocosmConfig;
}> = ({ children, config }) => {
  return (
    <ChainQueryProvider config={config as ChainQueryConfig}>
      <WalletProvider config={config as WalletConfig}>
        {children}
      </WalletProvider>
    </ChainQueryProvider>
  )
};
