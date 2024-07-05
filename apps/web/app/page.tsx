import { Wallet } from "@repo/react/wallet";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Wallet></Wallet>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
