import Post from '../models/Post.js';
import FileService from '../../../services/FileService.js';

class PostService {
    async create(post, picture) {
        try {
            let fileName;

            if(picture) {
                fileName = FileService.saveFile(picture.file);
            } else {
                fileName = null
            }

            return await Post.create({...post, picture: fileName});

        } catch (e) {
            console.log('PostService create err ',e)
        }
    }

    async getAll() {
        return Post.find();
    }

    async getOne(id) {
        if(!id) {
            throw new Error('Не указан ID')
        }
        return Post.findOne(id);
    }

    async update(post) {
        return Post.findByIdAndUpdate(post._id, post, {new: true});
    }

    async delete(id) {
        if(!id) {
            throw new Error('Не указан ID')
        }
        return Post.findByIdAndDelete(id);
    }
}

export default new PostService()

