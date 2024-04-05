import {check} from 'express-validator';
import {postTypeEnum} from '../../../models/Post.js';
import {checkIncludesSubArr} from '../../../shared/utils/helpers.js';

export const validateNewPost = [
  check('author').notEmpty().withMessage({
    ru: 'поле не должно быть пустым',
    en: 'the field should not be empty'
  }),
  check('title').notEmpty().withMessage({
    ru: 'поле не должно быть пустым',
    en: 'the field should not be empty'
  }),
  check('type').custom((value) => {
    return checkIncludesSubArr(value, postTypeEnum);
  }).withMessage({
    ru: 'неверные категории поста',
    en: 'incorrect post categories'
  }),
  check('blocks').notEmpty().withMessage({
    ru: 'поле не должно быть пустым',
    en: 'the field should not be empty'
  })
];

export const validateUpdatedPost = [
  ...validateNewPost,
  check('_id', 'Поле _id не должно быть пустым').notEmpty(),
];