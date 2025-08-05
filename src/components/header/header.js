import { bem, createElement } from 'utils'
import './header.css'

export function header() {
  const className = 'header-box'
  const header = createElement({
    type: 'h1',
    children: 'Custom Calculator',
    className: bem(className, 'header'),
  })
  const headerBox = createElement({
    type: 'header',
    children: header,
    className,
  })

  return headerBox
}
