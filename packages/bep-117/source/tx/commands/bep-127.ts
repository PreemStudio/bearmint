import { makeInstance } from '@bearmint/bep-099'
import { Option } from 'clipanion'
import * as t from 'typanion'

import { MESSAGE_OPTIONS } from '../constants.js'
import { makeTx } from '../tx.js'
import { TxCommand } from './base.js'

export class BEP127Command extends TxCommand {
	public static override paths = [['tx', 'bep-127']]

	public readonly description = 'Submit an `NFT Collection Ownership Transfer` Tx'

	public readonly hash = Option.String('--hash', {
		description: 'The hash of the NFT collection to transfer',
		required: true,
		validator: t.isString(),
	})

	public readonly recipient = Option.String('--recipient', {
		description: 'The address of the new owner of the NFT collection',
		required: true,
		validator: t.isString(),
	})

	async makeTx() {
		await makeTx(
			this,
			await makeInstance()
				.buildTx('@bearmint/bep-127')
				.execute(
					{
						ops: [
							{
								hash: this.hash,
								recipient: this.recipient,
							},
						],
					},
					MESSAGE_OPTIONS,
				),
		)
	}
}
