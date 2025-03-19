import Notification from '../../../models/Notification.js';

class NotificationService {
  async getAll(userId) {
    return Notification.find({author: userId});
  }
}

export default new NotificationService();

