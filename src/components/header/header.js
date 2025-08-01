import { createElement } from 'utils'
import './header.css'

export function header() {
  const header = createElement({
    type: 'h1',
    children: 'Custom Calculator',
    className: 'header',
  })

  return header
}
