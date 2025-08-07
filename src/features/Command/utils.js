import { Command } from './Command'
import { display } from '../../components/display'

const { setDisplayValue } = display()

export const createOperandOperation = calculate => {
  return (operation, ...args) => {
    return new Command(({ getLeftOperand, setLeftOperand, getRightOperand, setRightOperand }) => {
      const leftOperand = getLeftOperand()
      const rightOperand = getRightOperand()

      if (operation) {
        const res = calculate(rightOperand, ...args)
        setRightOperand(res.toString())
        setDisplayValue(`${leftOperand}${operation}${getRightOperand()}`)
      } else {
        const res = calculate(leftOperand, ...args)
        setLeftOperand(res.toString())
        setDisplayValue(getLeftOperand())
      }
    })
  }
}
