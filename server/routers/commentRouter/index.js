import {Router} from 'express';
import commentController from './controllers/CommentController.js';
import {checkAuth} from '../../middleweares/checkAuth.js';
import {validateNewPost, validateUpdatedPost} from './middleweares/validatePost.js';

const router = Router();

router.post('/', checkAuth, validateNewPost, commentController.create);
router.get('/:id', checkAuth, commentController.getAllByPostId);
router.put('/', checkAuth, validateUpdatedPost, commentController.update);
router.delete('/:id', checkAuth, commentController.delete);

export default router;