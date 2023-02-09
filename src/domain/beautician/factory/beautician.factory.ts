import Beautician from '../entity/beautician'
import BankAccount from '../valueObject/beautician.valueObject'

export default class BeauticianFactory {
  public static create (name: string, cpf: string, email: string, phone: string, password: string, picture: string, birthDate: string, sex: string, bankAccount: BankAccount): Beautician {
    const beautician = new Beautician(name, cpf, email, phone, password, picture, birthDate, sex)
    beautician.changeBankAccount(bankAccount)
    return beautician
  }
}
