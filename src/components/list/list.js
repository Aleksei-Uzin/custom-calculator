import { bem, createElement } from 'utils'
import { button } from '../button'
import './list.css'

export function list({
  itemParams = [],
  itemType = 'button',
  className = '',
  ...rest
} = {}) {
  const listItems = itemParams.map(({ content, value }) => {
    const dataValue = value ? { 'data-value': value } : null
    const params = Object.assign({}, dataValue, rest)
    let child = null

    if (itemType === 'button') {
      child = button(content, params)
    } else {
      child = createElement(itemType, params, content)
    }

    const listItem = createElement(
      'li',
      { className: bem(className, 'item') },
      child,
    )

    return listItem
  })

  const list = createElement(
    'ul',
    { className: bem(className, 'list') },
    ...listItems,
  )

  return list
}
