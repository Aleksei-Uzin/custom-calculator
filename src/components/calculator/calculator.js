import { createElement } from 'utils'
import { numpad } from '../numpad'
import './calculator.css'

export function calculator() {
  const calculator = createElement({
    type: 'main',
    children: numpad(),
    className: 'calculator-box',
  })

  return calculator
}
