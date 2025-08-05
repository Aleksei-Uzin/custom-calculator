import { exponentButton as exponent } from './exponentButton'
import { rootButton as root } from './rootButton'
import { textButton as text } from './textButton'

const button = { exponent, root, text }

export function createButton({ type = 'text', ...params }) {
  try {
    if (!Object.hasOwn(button, type)) {
      throw new Error(`Button type ${type} does not exist`)
    }

    return button[type](params)
  } catch (error) {
    // eslint-disable-next-line
    console.error(error.message)
  }
}
