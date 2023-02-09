import ValidatorInterface from '../../../@shared/validator/validator.interface'
import Beautician from '../entity/beautician'
import BeauticianYupValidator from '../validator/beautician.yup.validator'

export class BeauticianValidatorFactory {
  static create (): ValidatorInterface<Beautician> {
    return new BeauticianYupValidator()
  }
}
