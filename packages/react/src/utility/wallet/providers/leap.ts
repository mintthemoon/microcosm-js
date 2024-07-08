import { WalletConnector, WalletConfig, WalletProvider } from '../../../types/wallet';
import { OfflineSigner } from "@cosmjs/proto-signing";
import { LeapIcon } from '../../../components/icons';

declare global {
  interface Window {
    leap?: {
      enable: (chainId: string) => Promise<void>;
      getOfflineSigner: (chainId: string) => OfflineSigner;
    }
  }
}

export const leapConnector: WalletConnector = {
  connect: async (config: WalletConfig): Promise<{ address: string; signer: OfflineSigner }> => {
    if (!window.leap) {
      throw new Error("Leap extension is not installed");
    }

    await window.leap.enable(config.chainId);
    const signer = window.leap.getOfflineSigner(config.chainId);
    const accounts = await signer.getAccounts();
    
    if (accounts.length === 0 || accounts[0] === undefined) {
      throw new Error("No accounts found in Leap");
    }

    return { address: accounts[0].address, signer };
  },

  disconnect: async (): Promise<void> => {},

  subscribe: (config: WalletConfig, onAddressChange: (newAddress: string) => void): (() => void) => {
    const handleChange = async () => {
      try {
        const { address } = await leapConnector.connect(config);
        onAddressChange(address);
      } catch (error) {
        console.error("Error updating Leap address:", error);
      }
    };

    window.addEventListener("leap_keystorechange", handleChange);

    return () => {
      window.removeEventListener("leap_keystorechange", handleChange);
    };
  }
};

export const leapProvider: WalletProvider = {
  name: "Leap",
  icon: LeapIcon,
  connector: leapConnector
};