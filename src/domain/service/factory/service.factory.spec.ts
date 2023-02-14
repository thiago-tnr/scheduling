import BeauticianFactory from '../../beautician/factory/beautician.factory'
import BankAccount from '../../beautician/valueObject/beautician.valueObject'
import ServiceFactory from './service.factory'

describe('Service factory test', () => {
  it('should be create a new service', () => {
    const bankAccount = new BankAccount('any_owner', 'any_cpf', 'any_bank', 'any_account_type', 'any_account_number')
    const beauticianCreated = BeauticianFactory.create('any_name', 'any_cpf', 'any_email', 'any_phone', 'any_password', 'any_picture', 'any_birthDate', 'any_sex', bankAccount)

    const service = ServiceFactory.create(111, 'any_service', '60', 2, beauticianCreated.id)

    expect(service).toBeTruthy()
    expect(service.id).toBeDefined()
  })
})
