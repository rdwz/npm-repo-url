import { ESC, RST } from './const'

const GREEN = `${ESC}[32m`

const g = (str: string) => `${GREEN}${str}${RST}`

export default g
