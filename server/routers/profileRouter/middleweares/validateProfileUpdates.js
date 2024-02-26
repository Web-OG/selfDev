import {check} from 'express-validator';

export const validateProfileUpdates = [
  check('firstname').optional()
    .isLength({min: 3, max: 15}).withMessage({
      ru: 'имя должно быть длиннее 3 и короче 15',
      en: 'the name must be longer than 3 and shorter than 15'
    }),
  check('lastname').optional()
    .isLength({min: 3, max: 15}).withMessage({
      ru: 'фамилия должно быть длиннее 3 и короче 15',
      en: 'the lastname must be longer than 3 and shorter than 15'
    }),
  check('age').optional()
    .isLength({min: 1, max: 15}).withMessage({
      ru: 'возраст должен быть длиннее 1 и короче 15',
      en: 'the age must be longer than 1 and shorter than 15'
    }),
  check('phone').optional()
    .isLength({min: 3, max: 15}).withMessage({
      ru: 'телефон должен быть длиннее 3 и короче 15',
      en: 'the phone must be longer than 3 and shorter than 15'
    }),
  check('city').optional()
    .isLength({min: 3, max: 15}).withMessage({
      ru: 'город должен быть длиннее 3 и короче 15',
      en: 'the city must be longer than 3 and shorter than 15'
    }),
  check('avatar').optional()
    .isLength({min: 3}).withMessage({
      ru: 'аватар должен быть длиннее 3',
      en: 'the avatar must be longer than 3'
    }),
  check('country', 'Поле country не должно быть пустым').optional()
    .notEmpty().withMessage({
      ru: 'поле не должно быть пустым',
      en: 'the field should not be empty'
    }),
];