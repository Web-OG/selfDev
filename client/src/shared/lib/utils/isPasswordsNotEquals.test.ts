import {isPasswordsNotEquals} from 'shared/lib/utils/isPasswordsNotEquals';

describe('isPasswordsNotEquals.test', () => {
  test('with parameters not fully passed', () => {
    expect(isPasswordsNotEquals()).toBe(false);
    expect(isPasswordsNotEquals('qwe')).toBe(false);
    expect(isPasswordsNotEquals(undefined, 'qwe')).toBe(false);
  });

  test('with not passed second parameter', () => {
    expect(isPasswordsNotEquals('qwe', '')).toBe(false);
  });

  test('with equal second parameter', () => {
    expect(isPasswordsNotEquals('qwe', 'qwe')).toBe(false);
  });

  test('with not equal second parameter', () => {
    expect(isPasswordsNotEquals('qwe', 'srt')).toBe(true);
  });
});