export enum DocumentType {
  RG = 'RG',
  CPF = 'CPF'
}

export default class Document {
  constructor (private readonly _type: DocumentType, private readonly _number: string) {
  }

  get type (): DocumentType {
    return this._type
  }

  get number (): string {
    return this._number
  }

  validate (): void {
    if (this._type.length === 0) {
      throw new Error('Type is required')
    }
    if (this._type !== ('RG' || 'CPF')) {
      throw new Error('Type not accept')
    }
    if (this._number.length === 0) {
      throw new Error('Number is required')
    }
  }
}
