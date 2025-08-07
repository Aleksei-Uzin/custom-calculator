import { createElement } from 'utils'
import './display.css'

export const initValue = '0'

const createDisplay = () => {
  const element = createElement({
    type: 'input',
    className: 'display',
    disabled: true,
    value: initValue,
  })

  const setDisplayValue = newValue => (element.value = newValue)

  return { element, setDisplayValue }
}

const displayInstance = createDisplay()

export function display() {
  return displayInstance
}
