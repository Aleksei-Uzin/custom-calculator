export const OPERATIONS = {
  add: '+',
  subtract: '-',
  multiply: '*',
  divide: '/',
  result: '=',
}

export const getOperationSymbol = operation => OPERATIONS[operation]
