import { ChainQueryConfig } from "./chain-query";
import { WalletConfig } from "./wallet";

export interface MicrocosmConfig extends WalletConfig, ChainQueryConfig {};
