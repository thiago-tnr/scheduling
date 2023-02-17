import Services from './services'

describe('Service entity tests', () => {
  it('should throw error when price is empty', () => {
    expect(() => {
      new Services(0, 'any_service', '60', 2, 'beauticianId')
    }).toThrowError('services: price must be greater than 0')
  })
})
