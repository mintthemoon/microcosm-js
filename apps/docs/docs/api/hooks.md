# hooks

## Functions

### useBroadcast()

> **useBroadcast**(): \{`broadcast`: (`messages`, `memo`?) => `Promise`\<`DeliverTxResponse`\>; \}

#### Returns

\{`broadcast`: (`messages`, `memo`?) => `Promise`\<`DeliverTxResponse`\>; \}

##### broadcast()

> **broadcast**: (`messages`, `memo`?) => `Promise`\<`DeliverTxResponse`\>

###### Parameters

• **messages**: `EncodeObject`[]

• **memo?**: `string`

###### Returns

`Promise`\<`DeliverTxResponse`\>

#### Defined in

[packages/react/src/hooks/use-broadcast.ts:11](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/hooks/use-broadcast.ts#L11)

***

### useWallet()

> **useWallet**(): \{`account`: `null` \| `AccountData`;`address`: `string`;`client`: `null` \| `SigningStargateClient`;`config`: [`WalletConfig`](types.md#walletconfig);`connect`: (`provider`) => `Promise`\<`void`\>;`disconnect`: () => `Promise`\<`void`\>;`error`: `null` \| `Error`;`isConnected`: `boolean`;`isLoading`: `boolean`;`provider`: `null` \| [`WalletProvider`](types.md#walletprovider);`signer`: `null` \| `OfflineSigner`;`tokens`: `Map`\<`string`, [`TokenInfo`](utility/namespaces/tokens.md#tokeninfo)\>; \}

#### Returns

\{`account`: `null` \| `AccountData`;`address`: `string`;`client`: `null` \| `SigningStargateClient`;`config`: [`WalletConfig`](types.md#walletconfig);`connect`: (`provider`) => `Promise`\<`void`\>;`disconnect`: () => `Promise`\<`void`\>;`error`: `null` \| `Error`;`isConnected`: `boolean`;`isLoading`: `boolean`;`provider`: `null` \| [`WalletProvider`](types.md#walletprovider);`signer`: `null` \| `OfflineSigner`;`tokens`: `Map`\<`string`, [`TokenInfo`](utility/namespaces/tokens.md#tokeninfo)\>; \}

##### account

> **account**: `null` \| `AccountData`

##### address

> **address**: `string`

##### client

> **client**: `null` \| `SigningStargateClient`

##### config

> **config**: [`WalletConfig`](types.md#walletconfig)

##### connect()

> **connect**: (`provider`) => `Promise`\<`void`\>

###### Parameters

• **provider**: [`WalletProvider`](types.md#walletprovider)

###### Returns

`Promise`\<`void`\>

##### disconnect()

> **disconnect**: () => `Promise`\<`void`\>

###### Returns

`Promise`\<`void`\>

##### error

> **error**: `null` \| `Error`

##### isConnected

> **isConnected**: `boolean`

##### isLoading

> **isLoading**: `boolean`

##### provider

> **provider**: `null` \| [`WalletProvider`](types.md#walletprovider)

##### signer

> **signer**: `null` \| `OfflineSigner`

##### tokens

> **tokens**: `Map`\<`string`, [`TokenInfo`](utility/namespaces/tokens.md#tokeninfo)\>

#### Defined in

[packages/react/src/hooks/use-wallet.ts:11](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/hooks/use-wallet.ts#L11)
