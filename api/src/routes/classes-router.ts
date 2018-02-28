import {Router} from 'express';
import ClassesController from '../controllers/ClassesController';

export default class StudentsRouter {
  router: Router
  /**
   * Initialize the ClassesRouter
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
            .get('/', ClassesController.getAll)
            .post('/', ClassesController.createClass)
            .get('/:id', ClassesController.getOne);
  }

}
