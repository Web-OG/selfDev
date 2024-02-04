export const isPasswordsNotEquals = (password = '', passwordRepeat = '') => {
  return password !== '' && passwordRepeat !== '' && password !== passwordRepeat;
};