# Wallet Component

The `Wallet` component is a pre-built UI element that allows users to connect their Cosmos wallet to your dApp, view their account balance, and manage their connection.

## Usage

```jsx
import { Wallet } from '@microcosm/react';

function Header() {
  return (
    <header>
      <h1>Cosmos dApp</h1>
      <Wallet />
    </header>
  );
}
```

## Features

- Connect to popular Cosmos wallets (Keplr, Leap, Sonar)
- Display connected wallet address
- Show token balances
- Disconnect functionality

## Props

The `Wallet` component doesn't accept any props directly. Its behavior is controlled through the `MicrocosmProvider` configuration.

## Styling

The `Wallet` component uses Tailwind CSS for styling. You can customize its appearance by overriding Tailwind classes or by wrapping it in a custom styled component.

## Advanced Usage

Here's an example of how the `Wallet` component might be used in a more complex UI with custom styling:

```jsx
import { Wallet } from '@microcosm/react';

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="flex items-center space-x-4">
        <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold">Cosmos Explorer</h1>
      </div>
      <nav className="space-x-4">
        <a href="/dashboard" className="hover:underline">Dashboard</a>
        <a href="/transactions" className="hover:underline">Transactions</a>
        <div className="inline-block">
          <Wallet />
        </div>
      </nav>
    </header>
  );
}
```

This example demonstrates how to integrate the `Wallet` component into a more sophisticated header design, alongside navigation elements and custom styling.
