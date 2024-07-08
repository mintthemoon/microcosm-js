import React from "react";
import { WalletConfig } from "../types/wallet";
import { WalletProvider } from "./wallet";

export const MicrocosmProvider: React.FC<{
  children: React.ReactNode;
  config: WalletConfig;
}> = ({ children, config }) => {
  return <WalletProvider config={config}>{children}</WalletProvider>;
};
