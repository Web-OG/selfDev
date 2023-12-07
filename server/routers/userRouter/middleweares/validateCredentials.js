import {check} from 'express-validator';

export const validateLoginInputs = [
    check('username', 'Incorrect username').notEmpty(),
    check('password', 'Password must be longer than 3 and shorter than 12').isLength({min: 3, max: 12})
]

export const validateRegistrationInputs = [
        ...validateLoginInputs,
    check('email', 'Incorrect email').isEmail(),
]