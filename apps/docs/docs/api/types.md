# types

## Interfaces

### WalletConfig

#### Extended by

- [`WalletProps`](components.md#walletprops)

#### Properties

##### chainId

> **chainId**: `string`

###### Defined in

[packages/react/src/types/wallet.ts:12](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L12)

##### featuredTokens?

> `optional` **featuredTokens**: `string`[]

###### Defined in

[packages/react/src/types/wallet.ts:14](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L14)

##### maxTokens?

> `optional` **maxTokens**: `number`

###### Defined in

[packages/react/src/types/wallet.ts:15](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L15)

##### rpcUrl

> **rpcUrl**: `string`

###### Defined in

[packages/react/src/types/wallet.ts:13](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L13)

***

### WalletConnector

#### Properties

##### connect()

> **connect**: (`config`) => `Promise`\<\{`address`: `string`;`signer`: `OfflineSigner`; \}\>

###### Parameters

• **config**: [`WalletConfig`](types.md#walletconfig)

###### Returns

`Promise`\<\{`address`: `string`;`signer`: `OfflineSigner`; \}\>

###### address

> **address**: `string`

###### signer

> **signer**: `OfflineSigner`

###### Defined in

[packages/react/src/types/wallet.ts:40](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L40)

##### disconnect()

> **disconnect**: () => `Promise`\<`void`\>

###### Returns

`Promise`\<`void`\>

###### Defined in

[packages/react/src/types/wallet.ts:41](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L41)

##### subscribe()

> **subscribe**: (`config`, `onAddressChange`) => () => `void`

###### Parameters

• **config**: [`WalletConfig`](types.md#walletconfig)

• **onAddressChange**

###### Returns

`Function`

###### Returns

`void`

###### Defined in

[packages/react/src/types/wallet.ts:42](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L42)

***

### WalletProvider

#### Properties

##### connector

> **connector**: [`WalletConnector`](types.md#walletconnector)

###### Defined in

[packages/react/src/types/wallet.ts:48](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L48)

##### icon

> **icon**: `ComponentType`\<`SVGProps`\<`SVGSVGElement`\>\>

###### Defined in

[packages/react/src/types/wallet.ts:8](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L8)

##### name

> **name**: `string`

###### Defined in

[packages/react/src/types/wallet.ts:7](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L7)

***

### WalletState

#### Properties

##### account

> **account**: `null` \| `AccountData`

###### Defined in

[packages/react/src/types/wallet.ts:28](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L28)

##### address

> **address**: `string`

###### Defined in

[packages/react/src/types/wallet.ts:21](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L21)

##### client

> **client**: `null` \| `SigningStargateClient`

###### Defined in

[packages/react/src/types/wallet.ts:23](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L23)

##### config

> **config**: [`WalletConfig`](types.md#walletconfig)

###### Defined in

[packages/react/src/types/wallet.ts:27](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L27)

##### error

> **error**: `null` \| `Error`

###### Defined in

[packages/react/src/types/wallet.ts:26](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L26)

##### isConnected

> **isConnected**: `boolean`

###### Defined in

[packages/react/src/types/wallet.ts:19](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L19)

##### isLoading

> **isLoading**: `boolean`

###### Defined in

[packages/react/src/types/wallet.ts:20](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L20)

##### provider

> **provider**: `null` \| [`WalletProvider`](types.md#walletprovider)

###### Defined in

[packages/react/src/types/wallet.ts:22](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L22)

##### signer

> **signer**: `null` \| `OfflineSigner`

###### Defined in

[packages/react/src/types/wallet.ts:24](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L24)

##### tokens

> **tokens**: `Map`\<`string`, [`TokenInfo`](utility/namespaces/tokens.md#tokeninfo)\>

###### Defined in

[packages/react/src/types/wallet.ts:25](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L25)

## Type Aliases

### WalletAction

> **WalletAction**: \{`payload`: `boolean`;`type`: `"SET_LOADING"`; \} \| \{`payload`: \{`account`: `AccountData`;`address`: `string`;`client`: `SigningStargateClient`;`provider`: [`WalletProvider`](types.md#walletprovider);`signer`: `OfflineSigner`; \};`type`: `"CONNECT"`; \} \| \{`type`: `"DISCONNECT"`; \} \| \{`payload`: `Map`\<`string`, [`TokenInfo`](utility/namespaces/tokens.md#tokeninfo)\>;`type`: `"SET_TOKENS"`; \} \| \{`payload`: `Error` \| `null`;`type`: `"SET_ERROR"`; \} \| \{`payload`: `string`;`type`: `"CHANGE_ADDRESS"`; \}

#### Defined in

[packages/react/src/types/wallet.ts:31](https://github.com/mintthemoon/microcosm-js/blob/c346e4f2580bc6a563c9d5700fb5933b82afca4d/packages/react/src/types/wallet.ts#L31)
