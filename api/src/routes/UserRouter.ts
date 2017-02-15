import {Router} from 'express';
import UserController from '../controllers/UserController';

export class UserRouter {
  router: Router

  /**
   * Initialize the UserRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }
  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router
            .get('/', UserController.getAll)
            .post('/', UserController.createUser);
    this.router
            .get('/:id', UserController.getOne);
  }

}

// Create the UserRouter, and export its configured Express.Router
const userRoutes = new UserRouter();
userRoutes.init();

export default userRoutes.router;
