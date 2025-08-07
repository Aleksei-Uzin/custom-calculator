import { Command } from '../Command'
import { display, initValue } from '../../components/display'

const { setDisplayValue } = display()

export function DeleteLastNumber(operation) {
  return new Command(({ getLeftOperand, setLeftOperand, getRightOperand, setRightOperand }) => {
    const leftOperand = getLeftOperand()
    const rightOperand = getRightOperand()

    if (operation) {
      setRightOperand(rightOperand.slice(0, -1))
      setDisplayValue(`${leftOperand}${operation}${getRightOperand()}`)
    } else {
      setLeftOperand(leftOperand.slice(0, -1) || initValue)
      setDisplayValue(getLeftOperand())
    }
  })
}

export function Reset(mathCommand) {
  return new Command(({ setLeftOperand, setRightOperand }) => {
    setLeftOperand(initValue)
    setRightOperand(initValue)
    setDisplayValue(initValue)
    mathCommand.operation = null
  })
}
