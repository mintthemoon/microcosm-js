# useBroadcast Hook

The `useBroadcast` hook provides a function to broadcast transactions to the Cosmos network.

## Usage

```jsx
import { useBroadcast } from '@microcosm/react';

function MyComponent() {
  const { broadcast } = useBroadcast();

  // Use the broadcast function in your component
}
```

## Return Value

The `useBroadcast` hook returns an object with the following property:

- `broadcast` (function): A function to broadcast transactions to the network.

## The `broadcast` Function

The `broadcast` function takes the following parameters:

- `messages` (EncodeObject[]): An array of messages to be included in the transaction.
- `memo` (string, optional): A memo to be included with the transaction.

It returns a Promise that resolves to a `DeliverTxResponse` object.

## Example

Here's an example of how to use the `useBroadcast` hook to send a transaction:

```jsx
import { useBroadcast, useWallet } from '@microcosm/react';
import { coins } from "@cosmjs/amino";

function SendTokens() {
  const { isConnected, address } = useWallet();
  const { broadcast } = useBroadcast();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }

    const sendMsg = {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: {
        fromAddress: address,
        toAddress: recipient,
        amount: coins(amount, "ukuji"),
      },
    };

    try {
      const result = await broadcast([sendMsg], "Send tokens");
      console.log("Transaction result:", result);
      alert('Transaction sent successfully!');
    } catch (error) {
      console.error("Transaction failed:", error);
      alert('Transaction failed. See console for details.');
    }
  };

  return (
    <div>
      <input
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Recipient address"
      />
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount (in ukuji)"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
```

This example demonstrates how to use the `useBroadcast` hook in conjunction with the `useWallet` hook to create a simple token sending interface.
