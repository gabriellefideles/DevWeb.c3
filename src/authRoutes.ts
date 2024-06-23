
import { Router } from 'express';
import { register, login, listUsers } from './authController';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', listUsers);

export default router;
