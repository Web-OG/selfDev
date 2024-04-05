import Profile from '../../../models/Profile.js';
import {HttpError} from '../../../shared/utils/HttpErrorUtil.js';

class ProfileService {
  async create(payload) {
    try {
      const candidate = await Profile.findOne(payload._id);

      if (candidate) {
        HttpError.badRequest('Профиль уже существует');
      }

      return await Profile.create(payload);
    } catch (e) {
      console.log('ProfileService create err ', e);
    }
  }

  async getAll() {
    return Profile.find();
  }

  async getOne(id) {
    if (!id) {
      throw new Error('Не указан ID');
    }
    return Profile.findOne(id);
  }

  async update(id, payload) {
    return Profile.findByIdAndUpdate({_id: id}, payload, {new: true});
  }
}

export default new ProfileService();

