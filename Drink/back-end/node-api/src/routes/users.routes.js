import {Router} from 'express';
import {login, createUser, isAdmin} from '../controllers/users.controllers.js';

const router = Router();

router.post('/users', login);
router.post('/users/register', createUser);
router.post('/users/admin', isAdmin);

export default router