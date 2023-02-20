import Clinic from '../entity/clinic'
import Address from '../valueObject/address.valueObject'

export default class ClinicFactory {
  public static create (name: string, picture: string, cover: string, email: string, password: string, address: Address): Clinic {
    const clinic = new Clinic(name, picture, cover, email, password)
    clinic.address = address
    return clinic
  }
}
