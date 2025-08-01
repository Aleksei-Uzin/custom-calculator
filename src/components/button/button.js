import { createElement } from 'utils'

export function button(content = '', params = {}) {
  const buttonParams = Object.assign(params, { type: 'button' })
  const button = createElement({
    type: 'button',
    children: content,
    ...buttonParams,
  })

  return button
}
