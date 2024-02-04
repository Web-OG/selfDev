import {REGEXP} from 'shared/constants/regexp';

export type InputValidations = 'phone' | 'email' | 'username' | 'light-password' | 'strong-password';

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

  static validate(val: string, validations: InputValidations[]): string[] {
    const errors: string[] = [];

    validations.map((validation) => {
      switch (validation) {
      case 'email':
        if (!this.isEmail(val)) {
          errors.push('Не верный формат email');
        }
        break;
      case 'username':
        if (!this.isUsername(val)) {
          errors.push('Не верный формат username');
        }
        break;
      case 'light-password':
        if (!this.isLightPassword(val)) {
          errors.push('Слабый пароль');
        }
        break;
      case 'strong-password':
        if (!this.isStrongPassword(val)) {
          errors.push('Слабый пароль');
        }
        break;
      case 'phone':
        if (!this.isPhone(val)) {
          errors.push('Не верный формат телефона');
        }
        break;
      }
    });

    return errors;
  }
}