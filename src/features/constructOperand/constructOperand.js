import { createOperandOperation } from '../Command'

export const changeOperandSign = createOperandOperation(operand =>
  /^\d/.test(operand) ? `-${operand}` : operand.slice(1),
)

export const concatOperand = createOperandOperation((operand, n) => {
  const sign = /^-/.test(operand) ? '-' : ''
  const newOperand = /^-?0$/.test(operand) ? `${sign}${n}` : `${operand}${n}`

  return newOperand
})

export const createFloatOperand = createOperandOperation(operand =>
  !operand.includes('.') ? `${operand}.` : operand,
)
