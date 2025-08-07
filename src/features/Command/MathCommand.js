export class MathCommand {
  constructor() {
    this._operation = null
  }

  get operation() {
    return this._operation
  }

  set operation(value) {
    this._operation = value
  }

  execute(command) {
    return command.execute({
      getOperation: () => this.operation,
      setOperation: value => (this.operation = value),
    })
  }
}
