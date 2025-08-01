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
    let element = null

    if (itemType === 'button') {
      element = button(content, params)
    } else {
      element = createElement({ type: itemType, children: content, ...params })
    }

    const listItem = createElement({
      type: 'li',
      children: element,
      className: bem(className, 'item'),
    })

    return listItem
  })

  const list = createElement({
    type: 'ul',
    children: listItems,
    className: bem(className, 'list'),
  })

  return list
}
