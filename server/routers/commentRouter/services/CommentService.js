import Comment from '../../../models/Comment.js';

class CommentService {
  async create(Comment) {
    try {
      return await Comment.create({...Comment, createdAt: Date.now()});

    } catch (err) {
      throw new Error(err);
    }
  }

  async getAllByPostId(id) {
    if (!id) {
      throw new Error('Не указан ID');
    }
    return await Comment.find({postId: id}).populate('authorId');
  }

  async update(Comment) {
    return Comment.findByIdAndUpdate(Comment._id, Comment, {new: true});
  }

  async delete(id) {
    if (!id) {
      throw new Error('Не указан ID');
    }
    return Comment.findByIdAndDelete(id);
  }
}

export default new CommentService();

