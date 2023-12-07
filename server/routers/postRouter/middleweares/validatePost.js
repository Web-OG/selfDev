import {check} from 'express-validator';

export const validateNewPost = [
    check('title', 'Поле title не должно быть пустым').notEmpty(),
    check('content', 'Поле content не должно быть пустым').notEmpty(),
]

export const validateUpdatedPost = [
    ...validateNewPost,
    check('_id', 'Поле _id не должно быть пустым').notEmpty(),
]