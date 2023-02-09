import Address from '../valueObject/address.valueObject'
import ClinicFactory from './clinic.factory'

describe('Factory create clinic', () => {
  it('should create a clinic with address', () => {
    const address = new Address('any_city', 'any_uf', 'any_cep', 'any_street', 123, 'any_country')
    const clinic = ClinicFactory.create('any_name', 'any_picture', 'any_cover', 'any_email', 'any_password', address)
    expect(clinic.id).toBeDefined()
    expect(clinic.name).toBe('any_name')
  })
})
