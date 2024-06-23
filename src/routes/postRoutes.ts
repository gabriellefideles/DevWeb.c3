import { Router } from 'express';
import * as postController from '../controllers/postController';
import { authenticateToken } from '../middleware/middleware';
import { createPost} from '../controllers/postController'; // Exemplo de controlador
import { getAllPosts } from '../controllers/postController';


const router = Router();

router.get('/', getAllPosts)
router.get('/:id', postController.getPostById);
router.post('/', authenticateToken, createPost);
router.put('/:id', postController.updatePostById);
router.delete('/:id', postController.deletePostById);

export default router;
