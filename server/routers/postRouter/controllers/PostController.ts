import PostService from "../services/PostService";
import {Request, Response} from "express";

class PostController {
    async create(req: Request, res: Response) {
        try {
            const post = await PostService.create(req.body, req.files)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const posts = await PostService.getAll()
            res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const post = await PostService.getOne({_id: req.params.id})

            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updatedPost = await PostService.update(req.body)
            res.json(updatedPost)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const post = await PostService.delete({_id: req.params.id})
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

export default new PostController()