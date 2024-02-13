import PostService from '../services/PostService.js';
import {validationResult} from "express-validator";

class PostController {
    async create(req, res) {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    message: {
                        en: 'Incorrect request',
                        ru: 'Неверный запрос',
                    },
                    ...errors
                })
            }

            const author = req.user.id;

            if (!author) {
                return res.status(401).json({message: 'Только авторизованные пользователи могут размещать посты'})
            }

            const post = await PostService.create({...req.body, author}, req.files)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()

            res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne({_id: req.params.id})

            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    message: {
                        en: 'Incorrect request',
                        ru: 'Неверный запрос',
                    },
                    ...errors
                })
            }

            const updatedPost = await PostService.update(req.body)
            res.json(updatedPost)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const post = await PostService.delete({_id: req.params.id})
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

export default new PostController()