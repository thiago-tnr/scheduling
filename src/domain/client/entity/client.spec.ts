import Address from '../valueObject/address.valeObject'
import Document, { DocumentType } from '../valueObject/documentValeObject'
import Client from './client'

describe('Client entity unit test', () => {
  it('should throw create client if name is empty', () => {
    const client = new Client('1231561', 'John Doe', 'any_email', 'password', 'any_sex', 'any_birthDate')
    const document = new Document(DocumentType.RG, '123456798')
    const address = new Address('any_city', 'any_uf', 'any_postal_code', 'any_street', 111, 'any_country')
    client.document = document
    client.address = address

    expect(client.id).toBeDefined()
  })
})
