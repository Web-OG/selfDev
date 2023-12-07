import UserService from '../services/UserService.js';
import {validationResult} from 'express-validator'
import {HttpErrorUtil} from '../../../shared/utils/HttpErrorUtil.js';
import passport from 'passport';

class UserController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: 'Incorrect request', errors})
            }
            const {username, email, password} = req.body;

            const user = await UserService.register(username, email, password)
            res.json(user)
        } catch (e) {
            HttpErrorUtil(e, res)
        }
    }

    async login(req, res, next) {
        passport.authenticate('local', (err, user) => {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({message: 'Incorrect request', errors})
            }
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(400).json({message: 'Incorrect request !user'})
            }

            req.login(user, (err) => {
                if (err) return next(err)
                return res.json('login успешно')
            });
        })(req, res, next);
    }

    async logout(req, res, next) {
        try {
            req.logout(
                (err) => {
                    if (err) {
                        return next(err);
                    }
                    res.status(200).json('logout успешно');
                }
            )
        } catch (e) {
            next(e)
        }
    }

    auth(req, res) {
        if (req.isAuthenticated()) {
            res.status(200).json('Вы авторизованы')
        }else  res.status(401).json('Необходима авторизация')
    }
}

export default new UserController()