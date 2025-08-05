import { createElement } from 'utils'
import { display } from '../display'
import { keyboard } from '../keyboard'
import './calculator.css'

export function calculator() {
  const calculator = createElement({
    type: 'div',
    children: [display(), keyboard()],
    className: 'calculator',
  })

  return calculator
}
