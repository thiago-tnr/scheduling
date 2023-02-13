import ValidatorInterface from '../../../@shared/validator/validator.interface'
import Services from '../entity/services'
import ServicesYupValidator from '../entity/validator/services.yup.validator'

export class ServicesValidatorFactory {
  static create (): ValidatorInterface<Services> {
    return new ServicesYupValidator()
  }
}
