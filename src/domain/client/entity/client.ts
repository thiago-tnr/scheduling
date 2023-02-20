import { v4 as uuid } from 'uuid'
import Entity from '../../../@shared/entity/entity.abstract'
import Address from '../valueObject/address.valeObject'
import Document from '../valueObject/documentValeObject'

export default class Client extends Entity {
  private _address: Address
  private _document: Document
  constructor (private _phoneNumber: string, private readonly _name: string, private _email: string, private _password: string, private readonly _sex: string, private readonly _birthDate: string) {
    super()
    this._id = uuid()
  }

  get phoneNumber (): string {
    return this._phoneNumber
  }

  get name (): string {
    return this._name
  }

  get email (): string {
    return this._email
  }

  get password (): string {
    return this._password
  }

  get sex (): string {
    return this._sex
  }

  get birthDate (): string {
    return this._birthDate
  }

  get address (): Address {
    return this._address
  }

  set address (address: Address) {
    this._address = address
  }

  get document (): Document {
    return this._document
  }

  set document (document: Document) {
    this._document = document
  }

  changePassword (password: string): void {
    this._password = password
  }

  changePhoneNumber (phoneNumber: string): void {
    this._phoneNumber = phoneNumber
  }

  changeEmail (email: string): void {
    this._email = email
  }
}
