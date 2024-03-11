import {InputValidationService} from 'shared/lib/services/InputValidationService/index';

describe('InputValidationService.isEmail', () => {
  it('should return true for a valid email', () => {
    expect(InputValidationService.isEmail('test@example.com')).toBe(true);
  });

  it('should return false for an invalid email', () => {
    expect(InputValidationService.isEmail('test@.com')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(InputValidationService.isEmail('')).toBe(false);
  });

  it('should return false for an email without "@"', () => {
    expect(InputValidationService.isEmail('test.com')).toBe(false);
  });
});

describe('InputValidationService.isPhone', () => {
  it('should return true for valid phone numbers', () => {
    expect(InputValidationService.isPhone('+1234567890')).toBe(true);
    expect(InputValidationService.isPhone('123-456-7890')).toBe(true);
    expect(InputValidationService.isPhone('123 456 7890')).toBe(true);
    expect(InputValidationService.isPhone('1234567890')).toBe(true);
  });

  it('should return false for invalid phone numbers', () => {
    expect(InputValidationService.isPhone('123.456.7890')).toBe(false);
    expect(InputValidationService.isPhone('123456789')).toBe(false);
    expect(InputValidationService.isPhone('123456789012345')).toBe(false);
    expect(InputValidationService.isPhone('123-456-7890-12343')).toBe(false);
    expect(InputValidationService.isPhone('abc1234567890')).toBe(false);
  });
});

describe('InputValidationService.isUsername', () => {
  it('should return username verification', () => {
    expect(InputValidationService.isUsername('ValidUsername123')).toBe(true);
  });

  it('should return an invalid username with characters outside the allowed set', () => {
    expect(InputValidationService.isUsername('InvalidUsername!@#')).toBe(false);
  });

  it('should return an invalid username with a length of less than 3 characters', () => {
    expect(InputValidationService.isUsername('a')).toBe(false);
  });

  it('should return an invalid username with a length of more than 16 characters', () => {
    expect(InputValidationService.isUsername('thisUsernameIsTooLongForValidation')).toBe(false);
  });
});

describe('InputValidationService.isStrongPassword', () => {
  test('should return true for a valid password', () => {
    expect(InputValidationService.isStrongPassword('Valid123!')).toBe(true);
  });

  test('should return false for a password without uppercase letters', () => {
    expect(InputValidationService.isStrongPassword('invalid123!')).toBe(false);
  });

  test('should return false for a password without lowercase letters', () => {
    expect(InputValidationService.isStrongPassword('INVALID123!')).toBe(false);
  });

  test('should return false for a password without digits', () => {
    expect(InputValidationService.isStrongPassword('Invalid!')).toBe(false);
  });

  test('should return false for a password without special characters', () => {
    expect(InputValidationService.isStrongPassword('Invalid123')).toBe(false);
  });

  test('should return false for a password shorter than 8 characters', () => {
    expect(InputValidationService.isStrongPassword('short')).toBe(false);
  });
});

describe('InputValidationService.isOnlyIndents', () => {
  test('should return true for the string contains a space', () => {
    expect(InputValidationService.isOnlyIndents(' ')).toBe(true);
  });

  test('should return false for a string without space', () => {
    expect(InputValidationService.isOnlyIndents('test!')).toBe(false);
  });
});

describe('InputValidationService.validate', () => {
  let emptyErrMsg: unknown;

  beforeAll(() => {
    emptyErrMsg = {ru: [], en: []};
  });

  test('validation phone should return err msg', () => {
    expect(InputValidationService.validate('123.456.7890', ['phone'])).toEqual({
      ru: ['Не верный формат телефона'],
      en: ['Incorrect phone format']
    });
  });

  test('validation phone should return empty err msg', () => {
    expect(InputValidationService.validate('123-456-7890', ['phone'])).toEqual(emptyErrMsg);
  });

  test('validation without-indents should return err msg', () => {
    expect(InputValidationService.validate(' ', ['without-indents'])).toEqual({
      ru: ['Значение не должно содержать пробельные символы'],
      en: ['The value must not contain spaces']
    });
  });

  test('validation without-indents should return empty err msg', () => {
    expect(InputValidationService.validate('test', ['without-indents'])).toEqual(emptyErrMsg);
  });

  test('validation username should return err msg', () => {
    expect(InputValidationService.validate('userNAme@!', ['username'])).toEqual({
      ru: ['Не верный формат логина'],
      en: ['Invalid username format']
    });
  });

  test('validation username should return empty err msg', () => {
    expect(InputValidationService.validate('ValidUsername123', ['username'])).toEqual(emptyErrMsg);
  });

  test('validation email should return err msg', () => {
    expect(InputValidationService.validate('email', ['email'])).toEqual({
      ru: ['Не верный формат эл.почты'],
      en: ['Invalid email format']
    });
  });

  test('validation email should return empty err msg', () => {
    expect(InputValidationService.validate('test@example.com', ['email'])).toEqual(emptyErrMsg);
  });

  test('validation strong-password should return err msg', () => {
    expect(InputValidationService.validate('invalid123!', ['strong-password'])).toEqual({
      ru: ['Слабый пароль'],
      en: ['Weak password']
    });
  });

  test('validation strong-password should return empty err msg', () => {
    expect(InputValidationService.validate('Valid123!', ['strong-password'])).toEqual(emptyErrMsg);
  });

  test('multiple validations should return err msg', () => {
    expect(InputValidationService.validate(' ', ['username', 'without-indents'])).toEqual({
      ru: ['Не верный формат логина', 'Значение не должно содержать пробельные символы'],
      en: ['Invalid username format', 'The value must not contain spaces']
    });
  });

  test('multiple validations should return empty err msg', () => {
    expect(InputValidationService.validate('ValidUsername123', ['username', 'without-indents'])).toEqual(emptyErrMsg);
  });
});