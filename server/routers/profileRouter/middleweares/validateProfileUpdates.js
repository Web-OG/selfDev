import {check} from 'express-validator';

export const validateProfileUpdates = [
  check('firstname', 'Поле title не должно быть пустым').isLength({min: 3, max: 15}).optional(),
  check('lastname', 'Поле content не должно быть пустым').isLength({min: 3, max: 15}).optional(),
  check('age', 'Поле age не должно быть пустым').isLength({min: 3, max: 15}).optional(),
  check('phone', 'Поле phone не должно быть пустым').isLength({min: 3, max: 15}).optional(),
  check('country', 'Поле country не должно быть пустым').isLength({min: 3, max: 15}).optional(),
  check('city', 'Поле city не должно быть пустым').isLength({min: 3, max: 15}).optional(),
  check('avatar', 'Поле avatar не должно быть пустым').isLength({min: 3, max: 15}).optional(),
];