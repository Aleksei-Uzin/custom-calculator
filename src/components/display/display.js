import { createElement } from 'utils'
import './display.css'

export function display() {
  const input = createElement({
    type: 'input',
    className: 'display',
    id: 'display',
    dir: 'rtl',
    disabled: true,
    value: 0,
  })

  return input
}
