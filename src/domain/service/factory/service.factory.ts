import Services from '../entity/services'

export default class ServiceFactory {
  public static create (price: number, name: string, duration: string, quantity: number, beauticianId: string): Services {
    const service = new Services(price, name, duration, quantity, beauticianId)
    return service
  }
}
