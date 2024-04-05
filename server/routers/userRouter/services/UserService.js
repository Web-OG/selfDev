import User from '../../../models/User.js';
import CryptService from '../../../services/CryptService.js';
import {HttpError} from '../../../shared/utils/HttpErrorUtil.js';

class UserService {
  async register(username, email, password) {
    try {
      const candidate = await User.findOne({email});

      if (candidate) {
        HttpError.badRequest('Пользователь с таким isEmail уже зарегистрирован');
      }
      const hashedPassword = await CryptService.generateHashPassword(password);
      const user = new User({username, email, password: hashedPassword, roles: ['USER']});
      return await user.save();
    } catch (evt) {
      HttpError.badRequest(evt);
    }
  }
}

export default new UserService();

