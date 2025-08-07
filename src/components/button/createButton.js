import { exponentButton as exponent } from './exponentButton'
import { rootButton as root } from './rootButton'
import { textButton as text } from './textButton'
import { reducer } from '../../features'

const buttonsType = { exponent, root, text }

export function createButton({ type = 'text', ...params }) {
  try {
    if (!Object.hasOwn(buttonsType, type)) {
      throw new Error(`Button type ${type} does not exist`)
    }

    const button = buttonsType[type](params)

    button.addEventListener('click', event => {
      const buttonValue = event.currentTarget.dataset.value
      reducer(buttonValue)
    })

    return button
  } catch (error) {
    // eslint-disable-next-line
    console.error(error.message)
  }
}
