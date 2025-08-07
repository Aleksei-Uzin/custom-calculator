import { createElement } from 'utils'
import { display } from '../display'
import { keyboard } from '../keyboard'
import './calculator.css'

export function calculator() {
  const { element: displayElement } = display()
  const calculator = createElement({
    type: 'div',
    children: [displayElement, keyboard()],
    className: 'calculator',
  })

  return calculator
}
