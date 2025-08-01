import { createElement } from 'utils'
import './header.css'

export function header() {
  const header = createElement(
    'h1',
    { className: 'header' },
    'Custom Calculator',
  )

  return header
}
