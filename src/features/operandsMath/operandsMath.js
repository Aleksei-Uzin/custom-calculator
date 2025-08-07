import { Command } from '../Command'
import { display, initValue } from '../../components/display'
import { calcResult } from './utils'

const { setDisplayValue } = display()

export function OperandsMath(operation, operands) {
  return new Command(({ getOperation, setOperation }) => {
    const currentOperation = getOperation()

    if (currentOperation) {
      const res = calcResult(operands.leftOperand, operands.rightOperand, currentOperation)
      operands.leftOperand = res.toString()
      operands.rightOperand = initValue
      setDisplayValue(res)
      setOperation(null)
    }

    switch (operation) {
      case 'add':
        setOperation(operation)
        setDisplayValue(operands.leftOperand.concat('+'))
        break
      case 'subtract':
        setOperation(operation)
        setDisplayValue(operands.leftOperand.concat('-'))
        break
      case 'multiply':
        setOperation(operation)
        setDisplayValue(operands.leftOperand.concat('*'))
        break
      case 'divide':
        setOperation(operation)
        setDisplayValue(operands.leftOperand.concat('/'))
        break
      case 'result': {
        if (!getOperation()) {
          return
        }

        const res = calcResult(operands.leftOperand, operands.rightOperand, getOperation())

        if (typeof res === 'string') {
          operands.leftOperand = initValue
          operands.rightOperand = initValue
          setDisplayValue(res)
          setOperation(null)
        }

        const strRes = res.toString()
        operands.leftOperand = strRes
        operands.rightOperand = initValue
        setDisplayValue(strRes)
        setOperation(null)
        break
      }
      default:
        // eslint-disable-next-line
        console.error(`Unknown math operation - ${operation}`)
    }
  })
}
