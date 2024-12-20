import { ESC, RST } from './const'

const MAGENTA = `${ESC}[35m`

const m = (str: string) => `${MAGENTA}${str}${RST}`

export default m
