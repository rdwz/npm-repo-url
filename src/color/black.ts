import { ESC, RST } from './const'
const BLACK = `${ESC}[30m`

const k = (str: string) => `${BLACK}${str}${RST}`

export default k
