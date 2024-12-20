import { ESC, RST } from './const'
const STRIKE_THROUGH = `${ESC}[9m`

const x = (str: string) => `${STRIKE_THROUGH}${str}${RST}`

export default x
