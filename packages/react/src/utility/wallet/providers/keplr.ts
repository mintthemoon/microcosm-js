import { WalletConnector, WalletConfig, WalletProvider } from '../../../types/wallet';
import { OfflineSigner } from "@cosmjs/proto-signing";
import { KeplrIcon } from '../../../components/wallet/icons';

declare global {
  interface Window {
    keplr?: {
      enable: (chainId: string) => Promise<void>;
      getOfflineSigner: (chainId: string) => OfflineSigner;
    }
  }
}

export const keplrConnector: WalletConnector = {
  connect: async (config: WalletConfig): Promise<{ address: string; signer: OfflineSigner }> => {
    if (!window.keplr) {
      throw new Error("Keplr extension is not installed");
    }

    await window.keplr.enable(config.chainId);
    const signer = window.keplr.getOfflineSigner(config.chainId);
    const accounts = await signer.getAccounts();
    
    if (accounts.length === 0 || accounts[0] === undefined) {
      throw new Error("No accounts found in Keplr");
    }

    return { address: accounts[0].address, signer };
  },

  disconnect: async (): Promise<void> => {},

  subscribe: (config: WalletConfig, onAddressChange: (newAddress: string) => void): (() => void) => {
    const handleChange = async () => {
      try {
        const { address } = await keplrConnector.connect(config);
        onAddressChange(address);
      } catch (error) {
        console.error("Error updating Keplr address:", error);
      }
    };

    window.addEventListener("keplr_keystorechange", handleChange);

    return () => {
      window.removeEventListener("keplr_keystorechange", handleChange);
    };
  }
};

export const keplrProvider: WalletProvider = {
  name: "Keplr",
  icon: KeplrIcon,
  connector: keplrConnector
};