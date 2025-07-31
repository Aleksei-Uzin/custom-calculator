import { bem, createElement } from 'utils'
import { button } from '../button'
import { list } from '../list'
import { PARAMS } from './constants'
import './numpad.css'

export function numpad() {
  const className = 'numpad'
  const numButtons = list({ itemParams: PARAMS, className })
  const numpad = createElement('div', { className }, numButtons)

  return numpad
}
