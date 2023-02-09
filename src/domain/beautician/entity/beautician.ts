import Entity from '../../../@shared/entity/entity.abstract'
import { v4 as uuid } from 'uuid'
import NotificationError from '../../../@shared/notification/notification.error'
import { BeauticianValidatorFactory } from '../factory/beautician.validator.factory'
import BankAccount from '../valueObject/beautician.valueObject'

export default class Beautician extends Entity {
  private _bankAccount!: BankAccount

  constructor (private _name: string, private _cpf: string, private _email: string, private _phone: string, private _password: string, private _picture: string, private readonly _birthDate: string, private readonly _sex: string, private _active: boolean = true) {
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

  get cpf (): string {
    return this._cpf
  }

  get email (): string {
    return this._email
  }

  get phone (): string {
    return this._phone
  }

  get picture (): string {
    return this._picture
  }

  get password (): string {
    return this._password
  }

  get bankAccount (): BankAccount {
    return this._bankAccount
  }

  set bankAccount (bankAccount: BankAccount) {
    this._bankAccount = bankAccount
  }

  validate (): void {
    BeauticianValidatorFactory.create().validate(this)
  }

  changeBankAccount (bankAccount: BankAccount): void {
    this._bankAccount = bankAccount
  }

  changeName (name: string): void {
    this._name = name
    this.validate()
  }

  changePicture (picture: string): void {
    this._picture = picture
    this.validate()
  }

  changeEmail (email: string): void {
    this._email = email
    this.validate()
  }

  changeCpf (cpf: string): void {
    this._cpf = cpf
    this.validate()
  }

  changePassword (password: string): void {
    this._password = password
    this.validate()
  }

  changePhone (phone: string): void {
    this._phone = phone
    this.validate()
  }

  isActive (): boolean {
    return this._active
  }

  activate (): void {
    this._active = true
  }

  deactivate (): void {
    this._active = false
  }
}
