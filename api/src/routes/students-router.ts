import {Router} from 'express';
import StudentsController from '../controllers/StudentsController';
import {isAuthorized} from '../middleware/auth-middleware';

export default class StudentsRouter {
  router: Router
  /**
   * Initialize the StudentRouter
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
            .get('/', StudentsController.getAll)
            .post('/', StudentsController.createStudent)
            .get('/:id', StudentsController.getOne);
  }

}
