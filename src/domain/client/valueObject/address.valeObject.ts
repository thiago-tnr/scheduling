export default class Address {
  constructor (private readonly _city: string, private readonly _uf: string, private readonly _cep: string, private readonly _street: string, private readonly _number: number, private readonly _country: string) {
    this.validate()
  }

  get city (): string {
    return this._city
  }

  get uf (): string {
    return this._uf
  }

  get cep (): string {
    return this._cep
  }

  get street (): string {
    return this._street
  }

  get country (): string {
    return this._country
  }

  get number (): number {
    return this._number
  }

  validate (): void {
    if (this._street.length === 0) {
      throw new Error('Street is required')
    }
    if (this._number === 0) {
      throw new Error('Number is required')
    }
    if (this._cep.length === 0) {
      throw new Error('Zip is required')
    }
    if (this._city.length === 0) {
      throw new Error('City is required')
    }
    if (this._uf.length === 0) {
      throw new Error('UF is required')
    }
    if (this._country.length === 0) {
      throw new Error('Country is required')
    }
  }
}
