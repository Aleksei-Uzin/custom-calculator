import { bem, createElement } from 'utils'
import { createButton } from '../button'
import './list.css'

export function list({
  contentClassName = '',
  itemParams = [],
  itemType = 'button',
  listClassName = '',
} = {}) {
  const listItems = itemParams.map(({ className = [], content, value, ...rest }) => {
    const params = {
      className: [contentClassName, ...className],
      'data-value': value,
      ...rest,
    }
    let element = null

    if (itemType === 'button') {
      element = createButton({ content, ...params })
    } else {
      element = createElement({
        type: itemType,
        children: content,
        ...params,
      })
    }

    const listItem = createElement({
      type: 'li',
      children: element,
      className: bem(listClassName, 'item'),
    })

    return listItem
  })

  const list = createElement({
    type: 'ul',
    children: listItems,
    className: listClassName,
  })

  return list
}
