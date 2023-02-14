import * as yup from 'yup'
import ValidatorInterface from '../../../@shared/validator/validator.interface'
import Services from '../entity/services'

export default class ServicesYupValidator implements ValidatorInterface<Services> {
  validate (entity: Services): void {
    try {
      yup.object()
        .shape({
          name: yup.string().required('Name is required'),
          price: yup.number().required('Price is required').moreThan(0),
          beauticianId: yup.string().required('Beautician service provider is required'),
          duration: yup.string().required('Duration is required')
        })
    } catch (errors) {
      const err = errors as yup.ValidationError
      err.errors.forEach((error) => {
        entity.notification.addError({
          context: 'services',
          message: error
        })
      })
    }
  }
}
