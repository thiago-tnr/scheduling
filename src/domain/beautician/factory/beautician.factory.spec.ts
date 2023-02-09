import BankAccount from '../valueObject/beautician.valueObject'
import BeauticianFactory from './beautician.factory'

describe('Beautician factory unit test', () => {
  it('should create a beautician with bank account', () => {
    const bankAccount = new BankAccount('any_owner', 'any_cpf', 'any_bank', 'any_account_type', 'any_account_number')

    const beauticianCreated = BeauticianFactory.create('any_name', 'any_cpf', 'any_email', 'any_phone', 'any_password', 'any_picture', 'any_birthDate', 'any_sex', bankAccount)

    expect(beauticianCreated.id).toBeDefined()
    expect(beauticianCreated.bankAccount).toBeDefined()
  })
})
