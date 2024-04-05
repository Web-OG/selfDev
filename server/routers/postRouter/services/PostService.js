import Post from '../../../models/Post.js';
import FileService from '../../../services/FileService.js';
import PaginateService from '../../../services/PaginateService.js';

class PostService {
  async create(post, picture) {
    try {
      let fileName;

      if (picture) {
        fileName = FileService.saveFile(picture.file);
      } else {
        fileName = null;
      }

      return await Post.create({...post, picture: fileName});

    } catch (err) {
      throw new Error(err);
    }
  }

  async getAll(pagination) {
    if (pagination.page && pagination.limit) {
      const modelWithPagination = new PaginateService(pagination.page, pagination.limit, Post);

      return modelWithPagination.paginate();
    }
    return Post.find();
  }

  async getOne(id) {
    if (!id) {
      throw new Error('Не указан ID');
    }
    return Post.findOne(id);
  }

  async update(post) {
    return Post.findByIdAndUpdate(post._id, post, {new: true});
  }

  async delete(id) {
    if (!id) {
      throw new Error('Не указан ID');
    }
    return Post.findByIdAndDelete(id);
  }
}

export default new PostService();

