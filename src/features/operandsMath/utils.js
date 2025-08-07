import { MESSAGES } from 'utils'

export const calcResult = (n1, n2, operation) => {
  n1 = parseFloat(n1)
  n2 = parseFloat(n2)

  switch (operation) {
    case 'add':
      return n1 + n2
    case 'subtract':
      return n1 - n2
    case 'multiply':
      return n1 * n2
    case 'divide':
      return n2 !== 0 ? n1 / n2 : MESSAGES.divisionByZeroError
  }
}
