import User from '../models/User.js';
import CryptService from '../../../services/CryptService.js';
import {HttpError} from '../../../shared/utils/HttpErrorUtil.js';

class UserService {
    async register(username, email, password) {
        const candidate = await User.findOne({email});

        if (candidate) {
            throw HttpError.badRequest('Пользователь с таким email уже зарегестрирован')
        }
        const hashedPassword = await CryptService.generateHashPassword(password)
        const user = new User({username, email, password: hashedPassword})
        await user.save()

        return {message: 'Пользователь зарегестрирован'};
    }
}

export default new UserService()

