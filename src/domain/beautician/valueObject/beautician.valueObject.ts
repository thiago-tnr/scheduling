export default class BankAccount {
  constructor (private readonly _owner: string, private readonly _cpf: string, private readonly _bank: string, private readonly _accountType: string, private readonly _accountNumber: string) {
    this.validate()
  }

  get owner (): string {
    return this._owner
  }

  get cpf (): string {
    return this._cpf
  }

  get bank (): string {
    return this._bank
  }

  get accountType (): string {
    return this._accountType
  }

  get accountNumber (): string {
    return this._accountNumber
  }

  validate (): void {
    if (this._owner.length === 0) {
      throw new Error('Owner is required')
    }
    if (this._cpf.length === 0) {
      throw new Error('Cpf is required')
    }
    if (this._bank.length === 0) {
      throw new Error('Bank is required')
    }
    if (this._accountType.length === 0) {
      throw new Error('Account type is required')
    }
    if (this._accountNumber.length === 0) {
      throw new Error('Account number is required')
    }
  }
}

// const account = new Account('any_titular', 'any_cpf', 'any_bank', 'any_type', 'any_agency', 'any_number')
