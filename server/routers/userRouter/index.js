import {Router} from 'express';
import UserController from './controllers/UserController.js';
import {validateLoginInputs, validateRegistrationInputs} from './middleweares/validateCredentials.js';
import {authenticateMiddleware} from './middleweares/authenticate.js';

const router = Router();
authenticateMiddleware();

router.post('/registration', validateRegistrationInputs, UserController.registration);
router.post('/login/', validateLoginInputs, UserController.login);
router.post('/logout', UserController.logout);
router.get('/auth', UserController.auth);

export default router;

