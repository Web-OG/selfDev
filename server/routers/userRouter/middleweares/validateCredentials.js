import {check} from 'express-validator';

export const validateLoginInputs = [
  check('username')
    .isLength({min: 3, max: 16}).withMessage({
      ru: 'имя пользователя должно быть длиннее 3 и короче 15',
      en: 'username must be longer than 3 and shorter than 15'
    })
    .matches(/^[a-zA-Z0-9_-]+$/).withMessage({
      ru: 'имя пользователя может содержать буквы, цифры, тире и символы подчеркивания',
      en: 'username can contain letters numbers dashes and underscores'
    }),
  check('password')
    .isLength({min: 3, max: 15}).withMessage({
      ru: 'пароль должен быть длиннее 3 и короче 15',
      en: 'password must be longer than 3 and shorter than 15'
    })
];

export const validateRegistrationInputs = [
  ...validateLoginInputs,
  check('email',).isEmail().withMessage({
    ru: 'Не верный формат эл.почты',
    en: 'Invalid email format'
  })
];