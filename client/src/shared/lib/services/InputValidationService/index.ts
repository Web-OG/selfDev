import {REGEXP} from '../../constants/regexp';
import {ProjectLanguages} from '../../types';

export type InputValidations =
  'phone'
  | 'email'
  | 'username'
  | 'light-password'
  | 'strong-password'
  | 'without-indents';
export type InputValidationErrors = Record<ProjectLanguages, string[]>;

export class InputValidationService {
  static isEmail(str: string) {
    return REGEXP.EMAIL.test(str);
  }

  static isPhone(str: string) {
    return REGEXP.PHONE.test(str);
  }

  static isUsername(str: string) {
    return REGEXP.USERNAME.test(str);
  }

  static isLightPassword(str: string) {
    return REGEXP.LIGHT_PASSWORD.test(str);
  }

  static isStrongPassword(str: string) {
    return REGEXP.STRONG_PASSWORD.test(str);
  }

  static isOnlyIndents(str: string) {
    return REGEXP.ONLY_INDENTS.test(str);
  }

  static validate(val: string, validations: InputValidations[]): InputValidationErrors {
    const errors: InputValidationErrors = {ru: [], en: []};

    validations.map((validation) => {
      switch (validation) {
      case 'email':
        if (!this.isEmail(val)) {
          errors.ru.push('Не верный формат эл.почты');
          errors.en.push('Invalid email format');
        }
        break;
      case 'username':
        if (!this.isUsername(val)) {
          errors.ru.push('Не верный формат логина');
          errors.en.push('Invalid username format');
        }
        break;
      case 'light-password':
        if (!this.isLightPassword(val)) {
          errors.ru.push('Слабый пароль');
          errors.en.push('Weak password');
        }
        break;
      case 'strong-password':
        if (!this.isStrongPassword(val)) {
          errors.ru.push('Слабый пароль');
          errors.en.push('Weak password');
        }
        break;
      case 'phone':
        if (!this.isPhone(val)) {
          errors.ru.push('Не верный формат телефона');
          errors.en.push('Incorrect phone format');
        }
        break;
      case 'without-indents':
        if (this.isOnlyIndents(val)) {
          errors.ru.push('Значение не должно содержать пробельные символы');
          errors.en.push('The value must not contain spaces');
        }
        break;
      }
    });

    return errors;
  }
}