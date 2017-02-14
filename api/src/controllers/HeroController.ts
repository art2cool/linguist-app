import {Request, Response, NextFunction} from 'express';
const Heroes = require('./../../data.json');
import Hero from '../db/models/hero';

export class HeroController {

  /**
   * GET all Heroes.
   */
  public getAll(req: Request, res: Response) {
    Hero
      .find({})
      .then( heroes => {
        res.send(heroes);
      })
      .catch( e => {
        res.send(e);
      })
  }
  /**
   * GET one hero by id
   */
  public getOne(req: Request, res: Response) {
    let id = req.params.id;
    Hero
      .findById(id)
      .then( hero => {
        res.send(hero);
      })
      .catch( e => {
        res.send(e);
      })
  }
  /**
  * CREATE hero
  */
  public createHero(req: Request, res:Response) {
    let newHero = req.body.data;
      Hero
        .create(newHero)
        .then( hero => {
          res.send(hero);
        })
        .catch( e => {
          res.send(e);
        })
  }
}
const heroController = new HeroController();

export default heroController
