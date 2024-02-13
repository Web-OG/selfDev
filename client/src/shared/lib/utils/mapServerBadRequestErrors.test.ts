import {mapServerBadRequestErrors} from './mapServerBadRequestErrors';

describe('mapServerBadRequestErrors.test', () => {
  const firstError = {
    type: 'string',
    value: 'string',
    msg: {ru: 'ошибка 1', en: 'error 1'},
    path: 'path1',
    location: 'string',
  };

  const secondError = {
    type: 'string',
    value: 'string',
    msg: {ru: 'ошибка 2', en: 'error 2'},
    path: 'path2',
    location: 'string',
  };

  const thirdError = {
    type: 'string',
    value: 'string',
    msg: {ru: 'ошибка 3', en: 'error 3'},
    path: 'path3',
    location: 'string',
  };
  test('with one error object', () => {
    expect(mapServerBadRequestErrors([firstError])).toEqual({path1: {ru: 'ошибка 1', en: 'error 1'}});
  });

  test('with several objects', () => {
    expect(mapServerBadRequestErrors([firstError, secondError, thirdError])).toEqual({
      path1: {ru: 'ошибка 1', en: 'error 1'},
      path2: {ru: 'ошибка 2', en: 'error 2'},
      path3: {ru: 'ошибка 3', en: 'error 3'},
    });
  });
});