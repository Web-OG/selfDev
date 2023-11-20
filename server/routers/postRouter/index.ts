import { Router } from "express";
import postController from "./controllers/PostController";

const router = Router()

router.post('/', postController.create)
router.get('/', postController.getAll)
router.get('/:id', postController.getOne)
router.put('/', postController.update)
router.delete('/:id', postController.delete)

export default router