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

  element.addEventListener('input', event => {
    // console.log('Display value updated:', e.target.value)
  })

  const getDisplayValue = () => element.value

  const setDisplayValue = newValue => {
    element.value = newValue
    element.dispatchEvent(new Event('input', { bubbles: true }))
  }

  return { element, getDisplayValue, setDisplayValue }
}

const displayInstance = createDisplay()

export function display() {
  return displayInstance
}
