import NotificationService from '../services/NotificationService.js';

class NotificationController {
  async getAll(req, res) {
    try {
      const userId = req.user.id;
      const posts = await NotificationService.getAll(userId);

      res.json(posts);
    } catch (e) {
      console.log('ошибка туть');
      res.status(500).json(e);
    }
  }
}

export default new NotificationController();