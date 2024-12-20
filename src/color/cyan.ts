import { ESC, RST } from './const'

const CYAN = `${ESC}[36m`

const c = (str: string) => `${CYAN}${str}${RST}`

export default c
