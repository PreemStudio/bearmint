import type { Tx } from '@bearmint/bep-013'
import { PROTO_OPTS } from '@bearmint/bep-013'
import { BEP65Msg } from '@bearmint/bep-018'

export function makeTxMsgFactory() {
	return {
		async fromBytes(bytes: Uint8Array) {
			return BEP65Msg.fromBinary(bytes, PROTO_OPTS)
		},
		async fromTx(tx: Tx) {
			return BEP65Msg.fromBinary(tx.data.message.content, PROTO_OPTS)
		},
	}
}

export type CustomTxMsgFactory = ReturnType<typeof makeTxMsgFactory>
