import SignClient from "@walletconnect/sign-client";
import { SessionTypes, ProposalTypes } from "@walletconnect/types";
import { OfflineSigner, OfflineDirectSigner, AccountData } from "@cosmjs/proto-signing";
import { OfflineAminoSigner } from "@cosmjs/amino";
import { WalletConfig, WalletConnector, WalletProvider } from "../../../types/wallet";
import { SonarQRModal } from "../../../components/sonar-qr-modal";
import { SonarIcon } from "../../../components/icons";

let chain = "kaiyo-1";

const chainId = () => `cosmos:${chain}`;

const requiredNamespaces: (() => ProposalTypes.RequiredNamespaces) = () => {
  return {
    cosmos: {
      chains: [chainId()],
      methods: [],
      events: [],
    },
  };
};

class SonarSigner implements OfflineAminoSigner, OfflineDirectSigner {
  constructor(private signClient: SignClient, private session: SessionTypes.Struct) {}

  async getAccounts(): Promise<readonly AccountData[]> {
    const accountsStrings = this.session.namespaces["cosmos"]?.accounts;
    if (!accountsStrings) {
      throw new Error("No accounts found in Sonar wallet");
    }
    return accountsStrings.map((accountString: string) => {
      const address = accountString.split(':')[2];
      if (!address) {
        throw new Error(`Invalid account string: ${accountString}`);
      }
      return {
        address,
        algo: 'secp256k1' as const,
        pubkey: new Uint8Array(),
      };
    });
  }

  async signDirect(signerAddress: string, signDoc: any): Promise<any> {
    return this.signClient.request({
      topic: this.session.topic,
      chainId: chainId(),
      request: {
        method: "cosmos_signDirect",
        params: { signerAddress, signDoc },
      },
    });
  }

  async signAmino(signerAddress: string, signDoc: any): Promise<any> {
    return this.signClient.request({
      topic: this.session.topic,
      chainId: chainId(),
      request: {
        method: "cosmos_signAmino",
        params: { signerAddress, signDoc },
      },
    });
  }
}

export const sonarConnector: WalletConnector = {
  connect: async (config: WalletConfig): Promise<{ address: string; signer: OfflineSigner }> => {
    chain = config.chainId;
    return new Promise(async (resolve, reject) => {
      let hideModal: ((useCallback: boolean) => void) | null = null;
      try {
        const signClient = await SignClient.init({
          projectId: "fbda64846118d1a3487a4bfe3a6b00ac",
        });

        const { uri, approval } = await signClient.connect({
          requiredNamespaces: requiredNamespaces(),
          optionalNamespaces: {
            [``]: {
              methods: ["cosmos_signDirect", "cosmos_signAmino"],
              events: [],
            }
          }
        });

        if (!uri) {
          throw new Error("Failed to get URI for Sonar wallet connection");
        }

        hideModal = SonarQRModal.show(uri, () => {
          reject(new Error("User cancelled connection"));
        });

        const session = await approval();
        const accountsStrings = session.namespaces["cosmos"]?.accounts;
        if (!accountsStrings || accountsStrings.length === 0 || !accountsStrings[0]) {
          throw new Error("No accounts found in Sonar wallet");
        }

        const [, , address] = accountsStrings[0].split(':');
        if (!address) {
          throw new Error("Invalid account string");
        }

        const signer = new SonarSigner(signClient, session);
        if (hideModal) {
          hideModal(false);
        }
        resolve({ address, signer });
      } catch (error) {
        if (hideModal) {
          hideModal(false);
        }
        reject(error);
      }
    });
  },

  disconnect: async (): Promise<void> => {},

  subscribe: (config: WalletConfig, onAddressChange: (newAddress: string) => void): (() => void) => {
    return () => {};
  },
}

export const sonarProvider: WalletProvider = {
  name: "Sonar",
  icon: SonarIcon,
  connector: sonarConnector,
}