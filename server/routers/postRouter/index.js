import {Router} from 'express';
import postController from './controllers/PostController.js';
import {checkAuth} from '../../middleweares/checkAuth.js';
import {checkRole} from "../../middleweares/checkRole.js";
import {USER_ROLES} from "../../shared/constants/roles.js";
import {validateNewPost, validateUpdatedPost} from "./middleweares/validatePost.js";

const router = Router()

router.post('/', checkAuth, validateNewPost, postController.create)
router.get('/', checkAuth, checkRole([USER_ROLES.USER]), postController.getAll)
router.get('/:id', checkAuth, postController.getOne)
router.put('/', checkAuth,validateUpdatedPost, postController.update)
router.delete('/:id', checkAuth, postController.delete)

export default router