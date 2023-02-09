import * as yup from 'yup'
import ValidatorInterface from '../../../@shared/entity/validator/validator.interface'
import type Clinic from '../entity/clinic'

export default class CustomerYupValidator implements ValidatorInterface<Clinic> {
  validate (entity: Clinic): void {
    try {
      yup.object()
        .shape({
          name: yup.string().required('Name is required'),
          picture: yup.string().required('Picture is required'),
          email: yup.string().required('Email is required'),
          password: yup.string().required('Password is required and at least 6 characters').min(6)
        })
        .validateSync({
          name: entity.name,
          picture: entity.picture,
          email: entity.email,
          password: entity.password
        },
        {
          abortEarly: false
        }
        )
    } catch (errors) {
      const err = errors as yup.ValidationError
      err.errors.forEach((error) => {
        entity.notification.addError({
          context: 'clinic',
          message: error
        })
      })
    }
  }
}
