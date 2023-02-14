import ServiceFactory from '../factory/service.factory'

describe('Service entity tests', () => {
  it('should throw error when price is empty', () => {
    expect(() => {
      ServiceFactory.create(0, 'any_service', '60', 2, 'beauticianId')
    }).toThrowError('Price is required')
  })
})
