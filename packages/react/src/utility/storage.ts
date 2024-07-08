const WALLET_CONNECTION_KEY = 'walletConnection';

interface StoredWalletConnection {
  providerName: string;
}

export const saveWalletConnection = (providerName: string) => {
  localStorage.setItem(WALLET_CONNECTION_KEY, JSON.stringify({ providerName }));
};

export const getWalletConnection = (): StoredWalletConnection | null => {
  const storedData = localStorage.getItem(WALLET_CONNECTION_KEY);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return null;
};

export const clearWalletConnection = () => {
  localStorage.removeItem(WALLET_CONNECTION_KEY);
};