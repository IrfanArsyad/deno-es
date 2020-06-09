import { Router } from 'https://deno.land/x/oak/mod.ts';
import UserController from '../app/controllers/UserController.ts';
const router = new Router();

/* Router Get User */
router
  .get('/user', UserController.index)

  /* Router Dinamyc get parameter id */
  .get('/user/:id', UserController.show)

  /* Router Dinamyc get parameter id */
  .post('/user', UserController.store)

  /* Router  patch  */
  .patch('/user/:id', UserController.update)

  /* Router delete */
  .delete('/user/:id', UserController.destroy);

export default router;
