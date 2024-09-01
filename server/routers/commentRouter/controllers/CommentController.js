import CommentService from '../services/CommentService.js';
import {validationResult} from 'express-validator';

class CommentController {
  async create(req, res) {
    try {

      const author = req.user.id;

      if (!author) {
        return res.status(401).json({message: 'Только авторизованные пользователи могут оставлять комментарии'});
      }

      const post = await CommentService.create({...req.body, author});
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAllByPostId(req, res) {
    try {
      const posts = await CommentService.getAllByPostId({_id: req.params.id});

      res.json(posts);
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

      const updatedPost = await CommentService.update(req.body);
      res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const post = await CommentService.delete({_id: req.params.id});
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

}

export default new CommentController();