import { Router } from 'express';
import { signIn, signUp } from '../controllers/AuthController';
import { comparePasswords } from './../middleware/auth-middleware';

export default class AuthRouter {
  router: Router
  /**
   * Initialize the AuthRouter
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
      .post('/sign-in', signIn)
      .post('/sign-up', comparePasswords, signUp)
  }

}
