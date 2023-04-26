import { extendExpect } from '@bearmint/bep-005'
import { describe, expect, it } from 'vitest'
extendExpect(expect)
import { file, Paths } from '@bearmint/bep-009'

import { generateNodeKeys } from '../../source/node-key.js'

describe('Node Keys', () => {
	it('should 1 node key', async () => {
		file.remove(`${Paths.CMT_PATH_CONF}/node_key.json`)

		expect(`${Paths.CMT_PATH_CONF}/node_key.json`).toBeMissingFile()

		expect(
			await generateNodeKeys({
				count: 1,
				keyPairType: 'ed25519',
				numberOfValidators: 1,
				path: Paths.CMT_PATH_HOME,
			}),
		).toHaveLength(1)

		expect(`${Paths.CMT_PATH_CONF}/node_key.json`).toHaveFile()

		file.remove(`${Paths.CMT_PATH_CONF}/node_key.json`)
	})

	it('should 2 node keys', async () => {
		file.remove(`${Paths.CMT_PATH_HOME}/genesis_1/.cometbft/config/node_key.json`)

		expect(`${Paths.CMT_PATH_HOME}/genesis_1/.cometbft/config/node_key.json`).toBeMissingFile()

		expect(
			await generateNodeKeys({
				count: 1,
				keyPairType: 'ed25519',
				numberOfValidators: 2,
				path: Paths.CMT_PATH_HOME,
			}),
		).toHaveLength(1)

		expect(`${Paths.CMT_PATH_HOME}/genesis_1/.cometbft/config/node_key.json`).toHaveFile()

		file.remove(`${Paths.CMT_PATH_HOME}/genesis_1/.cometbft/config/node_key.json`)
	})
})
