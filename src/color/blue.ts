import { ESC, RST } from './const'

const BLUE = `${ESC}[34m`

const b = (str: string) => `${BLUE}${str}${RST}`

export default b
