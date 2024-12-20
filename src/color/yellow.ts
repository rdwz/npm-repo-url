import { ESC, RST } from './const'

const YELLOW = `${ESC}[33m`

const y = (str: string) => `${YELLOW}${str}${RST}`

export default y
