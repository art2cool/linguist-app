import {Router} from 'express';
import UserRouter from './user-router';
import defaultRoute from './default-router';

class MainRouter {
  router: Router
  /**
   * Initialize the Router
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.use("/api/v1/users", new UserRouter().router);

    this.router.use("/*", defaultRoute)
  }

}


export default new MainRouter().router;
