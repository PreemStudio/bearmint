import { homedir } from 'node:os'

// $BMHOME is equivelant to $CMTHOME but for Bearmint
export const BM_PATH_HOME = process.env['BMHOME'] ?? `${homedir()}/.bearmint`
export const BM_PATH_CONF = `${BM_PATH_HOME}/config`
export const BM_PATH_CONF_CONFIG = `${BM_PATH_CONF}/config.toml`
export const BM_PATH_CONF_MILESTONES = `${BM_PATH_CONF}/milestones.json`
export const BM_PATH_ACCS = `${BM_PATH_HOME}/accounts.json`

// $CMTHOME is a variable that Tendermint recommends in `~/.cometbft/config/config.toml`
export const CMT_PATH_HOME = process.env['CMTHOME'] ?? `${homedir()}/.cometbft`

export const CMT_PATH_CONF = `${CMT_PATH_HOME}/config`
export const CMT_PATH_CONF_CONFIG = `${CMT_PATH_CONF}/config.toml`
export const CMT_PATH_CONF_GENESIS = `${CMT_PATH_CONF}/genesis.json`
export const CMT_PATH_CONF_NODE_KEY = `${CMT_PATH_CONF}/node_key.json`
export const CMT_PATH_CONF_PRIV_VALIDATOR_KEY = `${CMT_PATH_CONF}/priv_validator_key.json`

export const CMT_PATH_DATA = `${CMT_PATH_HOME}/data`
export const CMT_PATH_DATA_PRIV_VALIDATOR_STATE = `${CMT_PATH_DATA}/priv_validator_state.json`
