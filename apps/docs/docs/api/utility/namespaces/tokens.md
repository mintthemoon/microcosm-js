# tokens

## Interfaces

### TokenInfo

#### Properties

##### baseAmount

> **baseAmount**: `number`

###### Defined in

[packages/react/src/utility/tokens.tsx:9](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/utility/tokens.tsx#L9)

##### baseDenom

> **baseDenom**: `string`

###### Defined in

[packages/react/src/utility/tokens.tsx:7](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/utility/tokens.tsx#L7)

##### displayAmount

> **displayAmount**: `number`

###### Defined in

[packages/react/src/utility/tokens.tsx:10](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/utility/tokens.tsx#L10)

##### displayDenom

> **displayDenom**: `string`

###### Defined in

[packages/react/src/utility/tokens.tsx:8](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/utility/tokens.tsx#L8)

## Variables

### TOKEN\_DISPLAY\_DECIMALS

> `const` **TOKEN\_DISPLAY\_DECIMALS**: `2` = `2`

#### Defined in

[packages/react/src/utility/tokens.tsx:13](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/utility/tokens.tsx#L13)

## Functions

### formatAddress()

> **formatAddress**(`address`, `isButton`): `string`

#### Parameters

• **address**: `string`

• **isButton**: `boolean`

#### Returns

`string`

#### Defined in

[packages/react/src/utility/tokens.tsx:22](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/utility/tokens.tsx#L22)

***

### formatString()

> **formatString**(`str`, `frontChars`, `backChars`): `string`

#### Parameters

• **str**: `string`

• **frontChars**: `number`

• **backChars**: `number`

#### Returns

`string`

#### Defined in

[packages/react/src/utility/tokens.tsx:15](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/utility/tokens.tsx#L15)

***

### formatTokenAmount()

> **formatTokenAmount**(`amount`): `string`

#### Parameters

• **amount**: `number`

#### Returns

`string`

#### Defined in

[packages/react/src/utility/tokens.tsx:40](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/utility/tokens.tsx#L40)

***

### formatTokenName()

> **formatTokenName**(`denom`): `string`

#### Parameters

• **denom**: `string`

#### Returns

`string`

#### Defined in

[packages/react/src/utility/tokens.tsx:28](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/utility/tokens.tsx#L28)

***

### getTokenIcon()

> **getTokenIcon**(`chainId`, `baseDenom`): `React.ReactNode`

#### Parameters

• **chainId**: `string`

• **baseDenom**: `string`

#### Returns

`React.ReactNode`

#### Defined in

[packages/react/src/utility/tokens.tsx:48](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/utility/tokens.tsx#L48)

***

### processRawBalances()

> **processRawBalances**(`chainId`, `rawBalances`): `Map`\<`string`, [`TokenInfo`](tokens.md#tokeninfo)\>

#### Parameters

• **chainId**: `string`

• **rawBalances**: readonly `Coin`[]

#### Returns

`Map`\<`string`, [`TokenInfo`](tokens.md#tokeninfo)\>

#### Defined in

[packages/react/src/utility/tokens.tsx:60](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/utility/tokens.tsx#L60)
