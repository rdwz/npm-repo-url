import { ESC, RST } from './const'
const RESET = `${ESC}[0m`

const big = (str: string) => `${str}${RST}`

export default big
