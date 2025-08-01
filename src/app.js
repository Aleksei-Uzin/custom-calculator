import { calculator, header } from 'components'
import './styles/reset.css'
import './styles/variables.css'

function app() {
  const fragment = new DocumentFragment()
  fragment.append(header(), calculator())

  return fragment
}

document.body.appendChild(app())
