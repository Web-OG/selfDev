import {Router} from 'express';
import profileController from './controllers/ProfileController.js';
import {checkAuth} from '../../middleweares/checkAuth.js';
import {checkRole} from '../../middleweares/checkRole.js';
import {USER_ROLES} from '../../shared/constants/roles.js';
import {validateProfileUpdates} from './middleweares/validateProfileUpdates.js';

const router = Router();

router.get('/', checkAuth, checkRole([USER_ROLES.USER]), profileController.getAll);
router.get('/:id', checkAuth, profileController.getOne);
router.put('/:id', checkAuth, validateProfileUpdates, profileController.update);

export default router;
export const createNewProfile = profileController.create;