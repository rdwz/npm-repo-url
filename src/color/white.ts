import { ESC, RST } from './const'

const WHITE = `${ESC}[37m`

const w = (str: string) => `${WHITE}${str}${RST}`

export default w
