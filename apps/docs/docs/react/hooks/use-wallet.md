# useWallet Hook

The `useWallet` hook provides access to the current wallet state and functions to interact with the connected wallet.

## Usage

```jsx
import { useWallet } from '@microcosm/react';

function WalletInfo() {
  const { 
    isConnected, 
    isLoading, 
    address, 
    provider, 
    error,
    config,
    client
  } = useWallet();

  // Use these values in your component
}
```

## Return Value

The `useWallet` hook returns an object with the following properties:

- `isConnected` (boolean): Whether a wallet is currently connected.
- `isLoading` (boolean): Whether a wallet connection is in progress.
- `address` (string): The address of the connected wallet.
- `provider` (WalletProvider | null): The current wallet provider.
- `error` (Error | null): Any error that occurred during wallet operations.
- `config` (WalletConfig): The current wallet configuration.
- `client` (SigningStargateClient | null): The Stargate client for the connected wallet.

## Examples

### Displaying Wallet Information

```jsx
function WalletInfo() {
  const { isConnected, address, config } = useWallet();

  if (!isConnected) {
    return <p>Please connect your wallet to view information.</p>;
  }

  return (
    <div>
      <h2>Wallet Information</h2>
      <p>Address: {address}</p>
      <p>Chain ID: {config.chainId}</p>
    </div>
  );
}
```

### Using Wallet State in a Component

```jsx
function TokenTransferForm() {
  const { isConnected, client, address } = useWallet();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isConnected || !client) {
      alert('Please connect your wallet first');
      return;
    }

    try {
      // Implement token transfer logic here using client
      console.log(`Transferring ${amount} tokens to ${recipient} from ${address}`);
      // You would typically use the `useBroadcast` hook here for the actual transaction
    } catch (error) {
      console.error('Transfer failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Recipient address"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <button type="submit" disabled={!isConnected}>
        Transfer Tokens
      </button>
    </form>
  );
}
```

These examples demonstrate how to use the `useWallet` hook to access wallet information and integrate it into your application's components. The `TokenTransferForm` example shows how you might start building a token transfer interface using the wallet state, though the actual transaction would typically be handled using the `useBroadcast` hook.
