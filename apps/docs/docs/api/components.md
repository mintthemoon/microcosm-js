# components

## Interfaces

### ButtonProps

#### Extends

- `ButtonHTMLAttributes`\<`HTMLButtonElement`\>.`VariantProps`\<*typeof* [`buttonVariants`](components.md#buttonvariants)\>

#### Properties

##### asChild?

> `optional` **asChild**: `boolean`

###### Defined in

[packages/react/src/components/button.tsx:39](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/button.tsx#L39)

##### size?

> `optional` **size**: `null` \| `"default"` \| `"sm"` \| `"lg"` \| `"icon"`

###### Inherited from

`VariantProps.size`

###### Defined in

[packages/react/src/components/button.tsx:22](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/button.tsx#L22)

##### variant?

> `optional` **variant**: `null` \| `"link"` \| `"default"` \| `"destructive"` \| `"outline"` \| `"secondary"` \| `"ghost"`

###### Inherited from

`VariantProps.variant`

###### Defined in

[packages/react/src/components/button.tsx:11](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/button.tsx#L11)

***

### ScrollAreaProps

#### Extends

- `ComponentPropsWithoutRef`\<*typeof* `ScrollAreaPrimitive.Root`\>

#### Properties

##### maxHeight?

> `optional` **maxHeight**: `string` \| `number`

###### Defined in

[packages/react/src/components/scroll-area.tsx:7](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/scroll-area.tsx#L7)

##### viewport?

> `optional` **viewport**: `string`

###### Defined in

[packages/react/src/components/scroll-area.tsx:8](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/scroll-area.tsx#L8)

***

### WalletProps

#### Extends

- [`WalletConfig`](types.md#walletconfig)

#### Properties

##### chainId

> **chainId**: `string`

###### Inherited from

[`WalletConfig`](types.md#walletconfig).[`chainId`](types.md#chainid)

###### Defined in

[packages/react/src/types/wallet.ts:12](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/types/wallet.ts#L12)

##### featuredTokens?

> `optional` **featuredTokens**: `string`[]

###### Inherited from

[`WalletConfig`](types.md#walletconfig).[`featuredTokens`](types.md#featuredtokens)

###### Defined in

[packages/react/src/types/wallet.ts:14](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/types/wallet.ts#L14)

##### maxTokens?

> `optional` **maxTokens**: `number`

###### Inherited from

[`WalletConfig`](types.md#walletconfig).[`maxTokens`](types.md#maxtokens)

###### Defined in

[packages/react/src/types/wallet.ts:15](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/types/wallet.ts#L15)

##### rpcUrl

> **rpcUrl**: `string`

###### Inherited from

[`WalletConfig`](types.md#walletconfig).[`rpcUrl`](types.md#rpcurl)

###### Defined in

[packages/react/src/types/wallet.ts:13](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/types/wallet.ts#L13)

## Functions

### Button()

> **Button**(`props`): `ReactNode`

#### Parameters

• **props**: [`ButtonProps`](components.md#buttonprops) & `RefAttributes`\<`HTMLButtonElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/button.tsx:42](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/button.tsx#L42)

***

### Dialog()

> **Dialog**(`props`, `context`?): `ReactNode`

#### Parameters

• **props**: `DialogProps`

• **context?**: `any`

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dialog.tsx:7](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dialog.tsx#L7)

***

### DialogClose()

> **DialogClose**(`props`): `ReactNode`

#### Parameters

• **props**: `DialogCloseProps` & `RefAttributes`\<`HTMLButtonElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dialog.tsx:13](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dialog.tsx#L13)

***

### DialogContent()

> **DialogContent**(`props`): `ReactNode`

#### Parameters

• **props**: `Omit`\<`DialogContentProps` & `RefAttributes`\<`HTMLDivElement`\>, `"ref"`\> & `RefAttributes`\<`HTMLDivElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dialog.tsx:30](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dialog.tsx#L30)

***

### DialogDescription()

> **DialogDescription**(`props`): `ReactNode`

#### Parameters

• **props**: `Omit`\<`DialogDescriptionProps` & `RefAttributes`\<`HTMLParagraphElement`\>, `"ref"`\> & `RefAttributes`\<`HTMLParagraphElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dialog.tsx:97](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dialog.tsx#L97)

***

### DialogFooter()

> **DialogFooter**(`__namedParameters`): `Element`

#### Parameters

• **\_\_namedParameters**: `HTMLAttributes`\<`HTMLDivElement`\>

#### Returns

`Element`

#### Defined in

[packages/react/src/components/dialog.tsx:68](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dialog.tsx#L68)

***

### DialogHeader()

> **DialogHeader**(`__namedParameters`): `Element`

#### Parameters

• **\_\_namedParameters**: `HTMLAttributes`\<`HTMLDivElement`\>

#### Returns

`Element`

#### Defined in

[packages/react/src/components/dialog.tsx:54](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dialog.tsx#L54)

***

### DialogOverlay()

> **DialogOverlay**(`props`): `ReactNode`

#### Parameters

• **props**: `Omit`\<`DialogOverlayProps` & `RefAttributes`\<`HTMLDivElement`\>, `"ref"`\> & `RefAttributes`\<`HTMLDivElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dialog.tsx:15](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dialog.tsx#L15)

***

### DialogPortal()

> **DialogPortal**(`props`, `context`?): `ReactNode`

#### Parameters

• **props**: `DialogPortalProps`

• **context?**: `any`

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dialog.tsx:11](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dialog.tsx#L11)

***

### DialogTitle()

> **DialogTitle**(`props`): `ReactNode`

#### Parameters

• **props**: `Omit`\<`DialogTitleProps` & `RefAttributes`\<`HTMLHeadingElement`\>, `"ref"`\> & `RefAttributes`\<`HTMLHeadingElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dialog.tsx:82](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dialog.tsx#L82)

***

### DialogTrigger()

> **DialogTrigger**(`props`): `ReactNode`

#### Parameters

• **props**: `DialogTriggerProps` & `RefAttributes`\<`HTMLButtonElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dialog.tsx:9](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dialog.tsx#L9)

***

### DropdownMenu()

> **DropdownMenu**(`props`, `context`?): `ReactNode`

#### Parameters

• **props**: `DropdownMenuProps`

• **context?**: `any`

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dropdown-menu.tsx:7](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dropdown-menu.tsx#L7)

***

### DropdownMenuCheckboxItem()

> **DropdownMenuCheckboxItem**(`props`): `ReactNode`

#### Parameters

• **props**: `Omit`\<`DropdownMenuCheckboxItemProps` & `RefAttributes`\<`HTMLDivElement`\>, `"ref"`\> & `RefAttributes`\<`HTMLDivElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dropdown-menu.tsx:93](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dropdown-menu.tsx#L93)

***

### DropdownMenuContent()

> **DropdownMenuContent**(`props`): `ReactNode`

#### Parameters

• **props**: `Omit`\<`DropdownMenuContentProps` & `RefAttributes`\<`HTMLDivElement`\>, `"ref"`\> & `RefAttributes`\<`HTMLDivElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dropdown-menu.tsx:57](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dropdown-menu.tsx#L57)

***

### DropdownMenuGroup()

> **DropdownMenuGroup**(`props`): `ReactNode`

#### Parameters

• **props**: `DropdownMenuGroupProps` & `RefAttributes`\<`HTMLDivElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dropdown-menu.tsx:11](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dropdown-menu.tsx#L11)

***

### DropdownMenuItem()

> **DropdownMenuItem**(`props`): `ReactNode`

#### Parameters

• **props**: `Omit`\<`DropdownMenuItemProps` & `RefAttributes`\<`HTMLDivElement`\>, `"ref"`\> & \{`inset`: `boolean`; \} & `RefAttributes`\<`HTMLDivElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dropdown-menu.tsx:75](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dropdown-menu.tsx#L75)

***

### DropdownMenuLabel()

> **DropdownMenuLabel**(`props`): `ReactNode`

#### Parameters

• **props**: `Omit`\<`DropdownMenuLabelProps` & `RefAttributes`\<`HTMLDivElement`\>, `"ref"`\> & \{`inset`: `boolean`; \} & `RefAttributes`\<`HTMLDivElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dropdown-menu.tsx:139](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dropdown-menu.tsx#L139)

***

### DropdownMenuPortal()

> **DropdownMenuPortal**(`props`, `context`?): `ReactNode`

#### Parameters

• **props**: `DropdownMenuPortalProps`

• **context?**: `any`

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dropdown-menu.tsx:13](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dropdown-menu.tsx#L13)

***

### DropdownMenuRadioGroup()

> **DropdownMenuRadioGroup**(`props`): `ReactNode`

#### Parameters

• **props**: `DropdownMenuRadioGroupProps` & `RefAttributes`\<`HTMLDivElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dropdown-menu.tsx:17](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dropdown-menu.tsx#L17)

***

### DropdownMenuRadioItem()

> **DropdownMenuRadioItem**(`props`): `ReactNode`

#### Parameters

• **props**: `Omit`\<`DropdownMenuRadioItemProps` & `RefAttributes`\<`HTMLDivElement`\>, `"ref"`\> & `RefAttributes`\<`HTMLDivElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dropdown-menu.tsx:117](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dropdown-menu.tsx#L117)

***

### DropdownMenuSeparator()

> **DropdownMenuSeparator**(`props`): `ReactNode`

#### Parameters

• **props**: `Omit`\<`DropdownMenuSeparatorProps` & `RefAttributes`\<`HTMLDivElement`\>, `"ref"`\> & `RefAttributes`\<`HTMLDivElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dropdown-menu.tsx:157](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dropdown-menu.tsx#L157)

***

### DropdownMenuShortcut()

> **DropdownMenuShortcut**(`__namedParameters`): `Element`

#### Parameters

• **\_\_namedParameters**: `HTMLAttributes`\<`HTMLSpanElement`\>

#### Returns

`Element`

#### Defined in

[packages/react/src/components/dropdown-menu.tsx:169](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dropdown-menu.tsx#L169)

***

### DropdownMenuSub()

> **DropdownMenuSub**(`props`, `context`?): `ReactNode`

#### Parameters

• **props**: `DropdownMenuSubProps`

• **context?**: `any`

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dropdown-menu.tsx:15](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dropdown-menu.tsx#L15)

***

### DropdownMenuSubContent()

> **DropdownMenuSubContent**(`props`): `ReactNode`

#### Parameters

• **props**: `Omit`\<`DropdownMenuSubContentProps` & `RefAttributes`\<`HTMLDivElement`\>, `"ref"`\> & `RefAttributes`\<`HTMLDivElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dropdown-menu.tsx:41](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dropdown-menu.tsx#L41)

***

### DropdownMenuSubTrigger()

> **DropdownMenuSubTrigger**(`props`): `ReactNode`

#### Parameters

• **props**: `Omit`\<`DropdownMenuSubTriggerProps` & `RefAttributes`\<`HTMLDivElement`\>, `"ref"`\> & \{`inset`: `boolean`; \} & `RefAttributes`\<`HTMLDivElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dropdown-menu.tsx:19](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dropdown-menu.tsx#L19)

***

### DropdownMenuTrigger()

> **DropdownMenuTrigger**(`props`): `ReactNode`

#### Parameters

• **props**: `DropdownMenuTriggerProps` & `RefAttributes`\<`HTMLButtonElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/dropdown-menu.tsx:9](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/dropdown-menu.tsx#L9)

***

### ScrollArea()

> **ScrollArea**(`props`): `ReactNode`

#### Parameters

• **props**: [`ScrollAreaProps`](components.md#scrollareaprops) & `RefAttributes`\<`HTMLDivElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/scroll-area.tsx:11](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/scroll-area.tsx#L11)

***

### ScrollBar()

> **ScrollBar**(`props`): `ReactNode`

#### Parameters

• **props**: `Omit`\<`ScrollAreaScrollbarProps` & `RefAttributes`\<`HTMLDivElement`\>, `"ref"`\> & `RefAttributes`\<`HTMLDivElement`\>

#### Returns

`ReactNode`

#### Defined in

[packages/react/src/components/scroll-area.tsx:37](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/scroll-area.tsx#L37)

***

### Wallet()

> **Wallet**(`props`, `context`?): `ReactNode`

#### Parameters

• **props**

• **context?**: `any`

#### Returns

`ReactNode`

#### Defined in

packages/react/src/components/wallet.tsx:16

***

### buttonVariants()

> **buttonVariants**(`props`?): `string`

#### Parameters

• **props?**: ConfigVariants\<\{ variant: \{ default: string; destructive: string; outline: string; secondary: string; ghost: string; link: string; \}; size: \{ default: string; sm: string; lg: string; icon: string; \}; \}\> & ClassProp

#### Returns

`string`

#### Defined in

[packages/react/src/components/button.tsx:7](https://github.com/mintthemoon/microcosm-js/blob/fb95c90ab10e9a453e664325843ddb64e7e576c9/packages/react/src/components/button.tsx#L7)
