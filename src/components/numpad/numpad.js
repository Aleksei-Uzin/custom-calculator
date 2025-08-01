import { createElement } from 'utils'
import { list } from '../list'
import { PARAMS } from './constants'
import './numpad.css'

export function numpad() {
  const className = 'numpad'
  const numButtons = list({ itemParams: PARAMS, className })
  const numpad = createElement({ children: numButtons, className })

  return numpad
}
