import {Request, Response, NextFunction} from 'express';
import User from '../db/models/user';

export class UserController {
  /**
   * GET all Users.
   */
  public getAll(req: Request, res: Response) {
    User
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
    User
      .findById(id)
      .then( hero => {
        res.send(hero);
      })
      .catch( e => {
        res.send(e);
      })
  }
  /**
  * CREATE user
  */
  public createUser(req: Request, res:Response) {
    let newUser = req.body.data;
      User
        .create(newUser)
        .then( hero => {
          res.send(hero);
        })
        .catch( e => {
          res.send(e);
        })
  }
}
const userController = new UserController();

export default userController
