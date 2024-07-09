'use client'

import { Wallet, Button } from "@microcosm/react/components";
import { useWallet, useBroadcast } from "@microcosm/react/hooks";
import styles from "./page.module.css";
import { EncodeObject } from "@cosmjs/proto-signing";
import { coins } from "@cosmjs/amino";

export default function Home() {
  const { isConnected, address, client, error } = useWallet();
  const { broadcast } = useBroadcast();

  const testBroadcast = async () => {
    if (!isConnected || !client) {
      console.error("Wallet is not connected");
      return;
    }

    try {
      const testRecipient = "kujira1exa6gqqg9umwnndluwlnlhzjq0uwyd8lupcckm";
      const amount = coins("1", "ukuji");

      const sendMsg: EncodeObject = {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: {
          fromAddress: address,
          toAddress: testRecipient,
          amount: amount,
        },
      };

      const result = await broadcast([sendMsg], "Test transaction");
      console.log("Broadcast result:", result);
    } catch (error) {
      console.error("Test broadcast failed:", error);
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Wallet />
        <Button onClick={testBroadcast} disabled={!isConnected}>
          Test Broadcast
        </Button>
        {error && <p className="text-red-500 mt-2">Error: {error.message}</p>}
      </main>
    </div>
  );
}