import ValidatorInterface from '../../../@shared/validator/validator.interface'
import Beautician from '../entity/beautician'
import * as yup from 'yup'
export default class BeauticianYupValidator implements ValidatorInterface<Beautician> {
  validate (entity: Beautician): void {
    try {
      yup.object()
        .shape({
          name: yup.string().required('Name is required'),
          phone: yup.string().required('Phone is required'),
          cpf: yup.string().required('Cpf is required'),
          picture: yup.string().required('Picture is required'),
          email: yup.string().required('Email is required'),
          password: yup.string().required('Password is required').min(6)
        })
        .validateSync({
          name: entity.name,
          cpf: entity.cpf,
          phone: entity.phone,
          picture: entity.picture,
          email: entity.email,
          password: entity.password
        },
        {
          abortEarly: false
        })
    } catch (errors) {
      const err = errors as yup.ValidationError
      err.errors.forEach((error) => {
        entity.notification.addError({
          context: 'beautician',
          message: error
        })
      })
    }
  }
}
