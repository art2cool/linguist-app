import {Router} from 'express';
import HeroController from '../controllers/HeroController';
const Heroes = require('./../../data');


export class HeroRouter {
  router: Router

  /**
   * Initialize the HeroRouter
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
    this.router.get('/', HeroController.getAll);
    this.router.get('/:id', HeroController.getOne);
    this.router.post('/', HeroController.createHero);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const heroRoutes = new HeroRouter();
heroRoutes.init();

export default heroRoutes.router;
