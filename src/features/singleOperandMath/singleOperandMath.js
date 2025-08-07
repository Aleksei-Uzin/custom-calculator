import { MESSAGES } from 'utils'
import { createOperandOperation } from '../Command'

export const exponent = createOperandOperation((operand, power) => parseFloat(operand) ** power)

export const factorial = createOperandOperation(operand => {
  const n = parseInt(operand)
  let res = 1

  if (n < 0) {
    return MESSAGES.factorialError
  } else if (n === 0 || n === 1) {
    return res
  } else {
    for (let i = 2; i <= n; i++) {
      res *= i
    }
  }

  return res
})

export const oneDivideBy = createOperandOperation(operand =>
  parseFloat(operand) === 0 ? MESSAGES.divisionByZeroError : 1 / operand,
)

export const percent = createOperandOperation(operand => parseFloat(operand) / 100)

export const root = createOperandOperation((operand, root) => parseFloat(operand) ** (1 / root))
