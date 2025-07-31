import { createElement } from 'utils'

export function button(content = '', params = {}) {
  const buttonParams = Object.assign(params, { type: 'button' })
  const button = createElement('button', buttonParams, content)

  return button
}
