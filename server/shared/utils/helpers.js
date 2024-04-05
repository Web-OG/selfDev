export const checkIncludesSubArr = (subArr, arr) => {
  return subArr.every(item => arr.includes(item));
};