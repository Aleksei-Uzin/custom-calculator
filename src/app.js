import { createElement } from './utils'
import './styles/reset.css'
import './styles/variables.css'

function component() {
  const element = createElement(
    'h1',
    { className: 'main' },
    'Custom Calculator',
  )

  return element
}

document.body.appendChild(component())
