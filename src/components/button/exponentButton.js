import { createElement } from 'utils'

export function exponentButton({ content = '', ...params }) {
  const buttonParams = Object.assign(params, { type: 'button' })
  const sup = createElement({ type: 'sup', children: content })
  const button = createElement({
    type: 'button',
    children: ['x', sup],
    ...buttonParams,
  })

  return button
}
