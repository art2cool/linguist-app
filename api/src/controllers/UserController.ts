import {Request, Response, NextFunction} from 'express';

import User from '../menagers/userMenager';

export class UserController {
  /**
   * GET all Users.
   */
  public getAll(req: Request, res: Response) {
    User
      .getAllUsers()
      .then(users => {
        res.send(users);
    })
      .catch(e => {
        res.send(e);
    })
  }
  /**
   * GET one user by id
   */
  public getOne(req: Request, res: Response) {
    let id = req.params.id;
    User
      .getOneUser(id)
      .then(user => {
        res.send(user);
    })
      .catch(e => {
        res.send(e);
    })
  }
  /**
  * CREATE user
  */
  public createUser(req: Request, res: Response) {
    let newUser = req.body.data;
    User
      .createUser(newUser)
      .then(user => {
        res.send(user);
    })
      .catch(e => {
        res.send(e);
    })
  }
  /**
  * UPDATE user
  */
  public updateUser(req: Request, res: Response) {
    let id = req.params.id;
    let userData = req.body.data;
    User
      .updateUser(id, userData)
      .then(user => {
        res.send(user);
    })
      .catch(e => {
        res.send(e);
    })
  }
}

const userController = new UserController();

export default userController
