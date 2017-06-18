import {Router} from 'express';
import UserController from '../controllers/UserController';

export default class UserRouter {
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
            .post('/', UserController.createUser)
            .get('/:id', UserController.getOne);
  }

}
