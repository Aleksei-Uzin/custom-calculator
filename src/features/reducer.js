import { MathCommand, OperandsCommand } from './Command'
import { changeOperandSign, concatOperand, createFloatOperand } from './constructOperand'
import { MemoryClear, MemoryPlus, MemoryRecall } from './memoryOperations'
import { OperandsMath } from './operandsMath'
import { DeleteLastNumber, Reset } from './utilsOperations'
import { exponent, factorial, oneDivideBy, percent, root } from './singleOperandMath'
import { getOperationSymbol, OPERATIONS } from 'utils'

const mathCommand = new MathCommand()
const operandsCommand = new OperandsCommand()

export function reducer(value) {
  // NUMERIC BUTTONS
  if (/^[0-9]$/.test(value)) {
    operandsCommand.execute(concatOperand(getOperationSymbol(mathCommand.operation), value))
  } else if (value === 'period') {
    operandsCommand.execute(createFloatOperand(getOperationSymbol(mathCommand.operation)))
  } else if (value === 'sign') {
    operandsCommand.execute(changeOperandSign(getOperationSymbol(mathCommand.operation)))
  }

  // BASIC MATH BUTTONS
  if (OPERATIONS[value]) {
    mathCommand.execute(new OperandsMath(value, operandsCommand))
  }

  // EXTRA MATH BUTTONS
  if (value === 'percent') {
    operandsCommand.execute(percent(getOperationSymbol(mathCommand.operation)))
  } else if (/^exponent/.test(value)) {
    operandsCommand.execute(exponent(getOperationSymbol(mathCommand.operation), value.slice(-1)))
  } else if (/^root/.test(value)) {
    operandsCommand.execute(root(getOperationSymbol(mathCommand.operation), value.slice(-1)))
  } else if (value === 'oneDivideBy') {
    operandsCommand.execute(oneDivideBy(getOperationSymbol(mathCommand.operation)))
  } else if (value === 'factorial') {
    operandsCommand.execute(factorial(getOperationSymbol(mathCommand.operation)))
  }

  // MEMORY BUTTONS
  if (value === 'memory-clear') {
    operandsCommand.execute(new MemoryClear())
  } else if (value === 'memory-plus') {
    operandsCommand.execute(new MemoryPlus())
  } else if (value === 'memory-minus') {
    operandsCommand.execute(new MemoryClear())
  } else if (value === 'memory-recall') {
    operandsCommand.execute(new MemoryRecall(getOperationSymbol(mathCommand.operation)))
  }

  // UTILS BUTTONS
  if (value === 'delete') {
    operandsCommand.execute(new DeleteLastNumber(getOperationSymbol(mathCommand.operation)))
  } else if (value === 'reset') {
    operandsCommand.execute(new Reset(mathCommand))
  }
}
