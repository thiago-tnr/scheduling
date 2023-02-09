import ValidatorInterface from '../../../@shared/validator/validator.interface'
import Clinic from '../entity/clinic'
import CustomerYupValidator from '../validator/clinic.yup.validator'

export default class CustomerValidatorFactory {
  static create (): ValidatorInterface<Clinic> {
    return new CustomerYupValidator()
  }
}
