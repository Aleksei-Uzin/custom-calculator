import { bem, createElement } from 'utils'
import { list } from '../list'
import {
  EXTRA_MATH_BUTTONS,
  MEMORY_BUTTONS,
  NUMERIC_BUTTONS,
  PRIMARY_MATH_BUTTONS,
} from './constants'
import './keyboard.css'

const className = 'keyboard'

export function keyboard() {
  const memoryButtonsPanel = list({
    contentClassName: bem(className, 'memory-button'),
    itemParams: MEMORY_BUTTONS,
    listClassName: 'memory-buttons-panel',
  })
  const leftButtonsPanel = list({
    contentClassName: bem(className, 'button'),
    itemParams: [...EXTRA_MATH_BUTTONS, ...NUMERIC_BUTTONS],
    listClassName: 'left-buttons-panel',
  })
  const rightButtonsPanel = list({
    contentClassName: bem(className, 'button'),
    itemParams: PRIMARY_MATH_BUTTONS,
    listClassName: 'right-buttons-panel',
  })
  const keyboard = createElement({
    children: [memoryButtonsPanel, leftButtonsPanel, rightButtonsPanel],
    className,
  })

  return keyboard
}
