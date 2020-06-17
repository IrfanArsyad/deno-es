import { Router } from 'https://deno.land/x/oak/mod.ts';
import UserController from '../app/controllers/UserController.ts';
const router = new Router();

// Router
router

  .get('/user', UserController.index)
  .get('/user/:id', UserController.show)
  .delete('/user/:id', UserController.destroy)
  .post('/user', UserController.store);
export default router;
