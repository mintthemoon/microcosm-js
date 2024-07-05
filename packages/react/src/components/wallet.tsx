import * as React from "react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel } from "./dropdown-menu"
import { Button } from "./button"

const Wallet = () => {
	return (
		<DropdownMenu>
				<DropdownMenuTrigger asChild>
						<Button variant="outline">Open</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
						<DropdownMenuLabel>Wallet</DropdownMenuLabel>
				</DropdownMenuContent>
		</DropdownMenu>
	)
}

export { Wallet }