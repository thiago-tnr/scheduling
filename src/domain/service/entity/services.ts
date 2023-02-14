import { v4 as uuid } from 'uuid'
import Entity from '../../../@shared/entity/entity.abstract'
import NotificationError from '../../../@shared/notification/notification.error'
import { ServicesValidatorFactory } from '../factory/service.validator.factory'

export default class Services extends Entity {
  constructor (private _price: number, private _name: string, private _duration: string, private _quantity: number, private _beauticianId: string) {
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

  get price (): number {
    return this._price
  }

  get name (): string {
    return this._name
  }

  get duration (): string {
    return this._duration
  }

  get quantity (): number {
    return this._quantity
  }

  get beauticianId (): string {
    return this._beauticianId
  }

  changeName (name: string): void {
    this._name = name
  }

  changePrice (price: number): void {
    this._price = price
  }

  changeDuration (duration: string): void {
    this._duration = duration
  }

  changeProviderService (beauticianId: string): void {
    this._beauticianId = beauticianId
  }

  changeQuantity (quantity: number): void {
    this._quantity = quantity
  }

  validate (): void {
    ServicesValidatorFactory.create().validate(this)
  }

  total (): number {
    return (this._price * this._quantity)
  }
}
