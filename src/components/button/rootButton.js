import { createElement } from 'utils'

export function rootButton({ content = '', ...params }) {
  const buttonParams = Object.assign(params, { type: 'button' })
  const sup = createElement({ type: 'sup', children: content })
  const span = createElement({ type: 'span' })
  span.innerHTML = '&#x0221A;n'

  const button = createElement({
    type: 'button',
    children: [sup, span],
    ...buttonParams,
  })

  return button
}
