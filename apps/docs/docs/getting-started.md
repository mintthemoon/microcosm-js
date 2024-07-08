# Getting Started with Microcosm React

This guide will help you quickly set up and start using the Microcosm React UI component library in your project.

## Prerequisites

- Node.js (version 14 or later)
- npm or yarn

## Installation

Install the Microcosm React package using npm or yarn:

```bash
npm install @microcosm/react
# or
yarn add @microcosm/react
```

## Basic Setup

1. Wrap your app with the `MicrocosmProvider`:

```jsx
import { MicrocosmProvider } from '@microcosm/react';

function App() {
  return (
    <MicrocosmProvider
      config={{
        chainId: "kaiyo-1",
        rpcUrl: "https://rpc-kujira.mintthemoon.xyz",
        featuredTokens: [
          "ukuji",
          "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
          "factory/kujira12cjjeytrqcj25uv349thltcygnp9k0kukpct0e/uwink",
        ],
      }}
    >
      {/* Your app components */}
    </MicrocosmProvider>
  );
}
```

2. Use the Wallet component:

```jsx
import { Wallet } from '@microcosm/react';

function MyComponent() {
  return (
    <div>
      <h1>My dApp</h1>
      <Wallet />
    </div>
  );
}
```

3. Use hooks in your components:

```jsx
import { useWallet, useBroadcast } from '@microcosm/react';

function MyComponent() {
  const { isConnected, address } = useWallet();
  const { broadcast } = useBroadcast();

  // Use these in your component logic
}
```

For more detailed information on components and hooks, check out their respective documentation pages.
