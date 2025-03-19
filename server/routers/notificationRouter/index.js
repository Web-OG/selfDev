import {Router} from 'express';
import {checkAuth} from '../../middleweares/checkAuth.js';
import NotificationController from './controllers/NotificationController.js';

const router = Router();

router.get('/', checkAuth, NotificationController.getAll);

export default router;