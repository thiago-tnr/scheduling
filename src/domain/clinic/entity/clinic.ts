import { v4 as uuid } from 'uuid'
import Entity from '../../../@shared/entity/entity.abstract'
import NotificationError from '../../../@shared/notification/notification.error'
import CustomerValidatorFactory from '../factory/clinic.validator.factory'
import type Address from '../valueObject/address.valueObject'

export default class Clinic extends Entity {
  private _address!: Address

  constructor (private _name: string, private _picture: string, private _cover: string, private _email: string, private _password: string) {
    super()
    this._id = uuid()
    this.validate()
    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors())
    }
  }

  get id (): string {
    return this._id
  }

  get name (): string {
    return this._name
  }

  get email (): string {
    return this._email
  }

  get picture (): string {
    return this._picture
  }

  get cover (): string {
    return this._cover
  }

  get password (): string {
    return this._password
  }

  get address (): Address {
    return this._address
  }

  set address (address: Address) {
    this._address = address
  }

  changeName (name: string): void {
    this._name = name
    this.validate()
  }

  changePicture (picture: string): void {
    this._picture = picture
    this.validate()
  }

  changeCover (cover: string): void {
    this._cover = cover
    this.validate()
  }

  changeEmail (email: string): void {
    this._email = email
    this.validate()
  }

  changePassword (password: string): void {
    this._password = password
    this.validate()
  }

  changeAddress (address: Address): void {
    this._address = address
  }

  validate (): void {
    CustomerValidatorFactory.create().validate(this)
  }
}
