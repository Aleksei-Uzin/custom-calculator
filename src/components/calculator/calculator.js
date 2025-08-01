import { createElement } from 'utils'
import { numpad } from '../numpad'
import './calculator.css'

export function calculator() {
  const calculator = createElement(
    'main',
    { className: 'calculator-box' },
    numpad(),
  )

  return calculator
}
