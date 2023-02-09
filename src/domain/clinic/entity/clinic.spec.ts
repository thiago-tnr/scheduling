/* eslint-disable prefer-const */
import Address from '../valueObject/address.valueObject'
import Clinic from './clinic'

let clinicSut = new Clinic('any_name', 'any_picture', 'any_cover', 'any_email', 'any_password')
describe('Clinic unit tests', () => {
  it('should throw error when name is empty', () => {
    expect(() => {
      new Clinic('', 'any_picture', 'any_cover', 'any_email', 'any_password')
    }).toThrowError('Name is required')
  })
  it('should throw error when picture is empty', () => {
    expect(() => {
      new Clinic('any_name', '', 'any_cover', 'any_email', 'any_password')
    }).toThrowError('Picture is required')
  })
  it('should throw error when email is empty', () => {
    expect(() => {
      new Clinic('', 'any_picture', 'any_cover', '', 'any_password')
    }).toThrowError('Email is required')
  })
  it('should throw error when password is empty', () => {
    expect(() => {
      new Clinic('', 'any_picture', 'any_cover', 'any_email', '')
    }).toThrowError('Password is required')
  })

  it('should password length more less than 6', () => {
    expect(() => {
      new Clinic('any_name', 'any_picture', 'any_cover', 'any_email', 'any')
    }).toThrowError('clinic: password must be at least 6 characters')
  })

  it('should be create a address', () => {
    const address = new Address('any_city', 'any_uf', 'any_cep', 'any_street', 123, 'any_country')
    clinicSut.address = address

    expect(clinicSut.address).toBeInstanceOf(Address)
  })
  it('should throw error when one field is empty', () => {
    expect(() => {
      new Address('', 'any_uf', 'any_cep', 'any_street', 123, 'any_country')
    }).toThrowError('City is required')
  })

  it('should a created clinic have a uuid', () => {
    expect(clinicSut.id).toBeDefined()
  })

  it('should change name', () => {
    clinicSut.changeName('John Doe')
    expect(clinicSut.name).toBe('John Doe')
  })
  it('should change picture', () => {
    clinicSut.changePicture('John picture')
    expect(clinicSut.picture).toBe('John picture')
  })
  it('should change cover', () => {
    clinicSut.changeCover('John cover clinic')
    expect(clinicSut.cover).toBe('John cover clinic')
  })
  it('should change email', () => {
    clinicSut.changeEmail('John email')
    expect(clinicSut.email).toBe('John email')
  })
  it('should change password', () => {
    clinicSut.changePassword('John password')
    expect(clinicSut.password).toBe('John password')
  })
})
