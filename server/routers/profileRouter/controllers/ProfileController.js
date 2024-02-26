import ProfileService from '../services/ProfileService.js';
import {validationResult} from 'express-validator';

class ProfileController {
  async create(payload) {
    try {
      const user = payload._id;

      if (!user) {
        return null;
      }

      const emptyProfile = {
        _user: user,
        _id: user,
        firstname: '',
        lastname: '',
        age: '',
        phone: '',
        country: '',
        city: '',
        avatar: ''
      };

      return await ProfileService.create(emptyProfile);
    } catch (e) {
      console.log('ProfileController catch', e);
    }
  }


  async getAll(req, res) {
    try {
      const posts = await ProfileService.getAll();

      res.json(posts);
    } catch (e) {

      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const post = await ProfileService.getOne({_id: req.params.id});

      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: {
            en: 'Incorrect request',
            ru: 'Неверный запрос',
          },
          ...errors
        });
      }

      const id = req.params.id;
      const userId = req.user.id;

      if (!id) {
        return res.status(404).json({message: 'id is required'});
      }

      if (id !== userId) {
        return res.status(404).json({message: 'Вы не можете изменять данные не своего профиля'});
      }

      const updatedProfile = await ProfileService.update(id, req.body);
      return res.json(updatedProfile);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}

export default new ProfileController();