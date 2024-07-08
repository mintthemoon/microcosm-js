import { OfflineSigner } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";

export function leapConnect(): Promise<{ address: string, signer: OfflineSigner, client: SigningStargateClient }> {
    return new Promise((resolve, reject) => {
        reject(new Error("not implemented"))
    });
}