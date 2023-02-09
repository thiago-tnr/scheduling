import Beautician from './beautician'

describe('Beautician entity test', () => {
  const beauticianSut = new Beautician('any_name', 'any_cpf', 'any_email', 'any_phone', 'any_password', 'any_picture', 'any_birthDate', 'any_sex')

  it('should throw error when name is empty', () => {
    expect(() => {
      new Beautician('', 'any_cpf', 'any_email', 'any_phone', 'any_password', 'any_picture', 'any_birthDate', 'any_sex', true)
    }).toThrowError('Name is required')
  })
  it('should throw error when cpf is empty', () => {
    expect(() => {
      new Beautician('any_name', '', 'any_email', 'any_phone', 'any_password', 'any_picture', 'any_birthDate', 'any_sex', true)
    }).toThrowError('Cpf is required')
  })
  it('should throw error when email is empty', () => {
    expect(() => {
      new Beautician('any_name', 'any_cpf', '', 'any_phone', 'any_password', 'any_picture', 'any_birthDate', 'any_sex', true)
    }).toThrowError('Email is required')
  })
  it('should throw error when phone is empty', () => {
    expect(() => {
      new Beautician('any_name', 'any_cpf', 'any_email', '', 'any_password', 'any_picture', 'any_birthDate', 'any_sex', true)
    }).toThrowError('Phone is required')
  })
  it('should throw error when picture is empty', () => {
    expect(() => {
      new Beautician('any_name', 'any_cpf', 'any_email', 'any_phone', 'any_password', '', 'any_birthDate', 'any_sex', true)
    }).toThrowError('Picture is required')
  })
  it('should throw error when password is empty', () => {
    expect(() => {
      new Beautician('any_name', 'any_cpf', 'any_email', 'any_phone', '', 'any_picture', 'any_birthDate', 'any_sex', true)
    }).toThrowError('Password is required')
  })
  it('should throw error when password is empty', () => {
    expect(() => {
      new Beautician('any_name', 'any_cpf', 'any_email', 'any_phone', 'any', 'any_picture', 'any_birthDate', 'any_sex', true)
    }).toThrowError('beautician: password must be at least 6 characters')
  })

  it('should be active the beautician', () => {
    const beautician = new Beautician('any_name', 'any_cpf', 'any_email', 'any_phone', 'any_password', 'any_picture', 'any_birthDate', 'any_sex', false)

    beautician.activate()

    expect(beautician.isActive()).toBeTruthy()
  })
  it('should be deactivate the beautician', () => {
    const beautician = new Beautician('any_name', 'any_cpf', 'any_email', 'any_phone', 'any_password', 'any_picture', 'any_birthDate', 'any_sex', false)

    beautician.deactivate()

    expect(beautician.isActive()).toBeFalsy()
  })
  it('should be change name', () => {
    beauticianSut.changeName('John Doe')
    expect(beauticianSut.name).toBe('John Doe')
  })
  it('should be change password', () => {
    beauticianSut.changePassword('pass')
    expect(beauticianSut.password).toBe('pass')
  })
})

// const account = new Account('any_titular', 'any_cpf', 'any_bank', 'any_type', 'any_agency', 'any_number')
