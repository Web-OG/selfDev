import Post from "../models/Post";
import FileService from "../../../services/FileService";
import fileUpload from "express-fileupload";

class PostService {
    async create(post: Post, picture: fileUpload.FileArray | null | undefined) {
        const fileName = FileService.saveFile(picture.file);
        const createdPost = await Post.create({...post, picture: fileName});
        return createdPost;
    }

    async getAll() {
        const posts = await Post.find()
        return posts;
    }

    async getOne(id) {
        if(!id) {
            throw new Error('Не указан ID')
        }
        const post = await Post.findOne(id)
        console.log(post)
        return post;
    }

    async update(post) {
        if(!post._id) {
            throw new Error('Не указан ID')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost;
    }

    async delete(id) {
        if(!id) {
            throw new Error('Не указан ID')
        }
        console.log(id)
        const post = await Post.findByIdAndDelete(id)
        return post;
    }
}

export default new PostService()

