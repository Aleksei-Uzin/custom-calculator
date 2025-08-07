import { Command } from '../Command'
import { display, initValue } from '../../components/display'
import { handleLocalStorage } from 'utils'

const { setDisplayValue } = display()
const { getStorage, cleareStorage, updateStorage } = handleLocalStorage()

export function MemoryClear() {
  return new Command(() => cleareStorage())
}

export function MemoryPlus(operation) {
  return new Command(({ getLeftOperand, getRightOperand }) => {
    const leftOperand = getLeftOperand()
    const rightOperand = getRightOperand()

    updateStorage(operation ? rightOperand : leftOperand)
  })
}

export function MemoryRecall(operation) {
  return new Command(({ getLeftOperand, setLeftOperand, getRightOperand, setRightOperand }) => {
    const leftOperand = getLeftOperand()
    const [value = initValue] = getStorage()

    if (operation) {
      setRightOperand(value)
      setDisplayValue(`${leftOperand}${operation}${getRightOperand()}`)
    } else {
      setLeftOperand(value)
      setDisplayValue(getLeftOperand())
    }
  })
}
