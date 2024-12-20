import { ESC, RST } from './const'
const UNDERLINE = `${ESC}[4m`

const u = (str: string) => `${UNDERLINE}${str}${RST}`

export default u
