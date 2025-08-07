import { initValue } from '../../components/display'

export class OperandsCommand {
  constructor() {
    this._leftOperand = initValue
    this._rightOperand = initValue
  }

  get leftOperand() {
    return this._leftOperand
  }

  set leftOperand(value) {
    this._leftOperand = value
  }

  get rightOperand() {
    return this._rightOperand
  }

  set rightOperand(value) {
    this._rightOperand = value
  }

  execute(command) {
    return command.execute({
      getLeftOperand: () => this.leftOperand,
      setLeftOperand: value => (this.leftOperand = value),
      getRightOperand: () => this.rightOperand,
      setRightOperand: value => (this.rightOperand = value),
    })
  }
}
