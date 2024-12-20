import { ESC, RST } from './const'

const RED = `${ESC}[31m`
const r = (str: string) => `${RED}${str}${RST}`

export default r
