import {isPasswordsNotEquals} from 'shared/lib/utils/isPasswordsNotEquals';

describe('isPasswordsNotEquals.test', () => {
  it('with parameters not fully passed', () => {
    expect(isPasswordsNotEquals()).toBe(false);
    expect(isPasswordsNotEquals('qwe')).toBe(false);
    expect(isPasswordsNotEquals(undefined, 'qwe')).toBe(false);
  });

  it('with not passed second parameter', () => {
    expect(isPasswordsNotEquals('qwe', '')).toBe(false);
  });

  it('with equal second parameter', () => {
    expect(isPasswordsNotEquals('qwe', 'qwe')).toBe(false);
  });

  it('with not equal second parameter', () => {
    expect(isPasswordsNotEquals('qwe', 'srt')).toBe(true);
  });
});