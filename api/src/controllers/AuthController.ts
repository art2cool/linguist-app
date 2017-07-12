import {Request, Response, NextFunction} from 'express';
import { hashSync, compareSync } from 'bcrypt';
import IUserDocument from "../interfaces/IUserDocument";

import User from '../menagers/userMenager';

  /**
   * signIn
   */
export function signIn(req: Request, res: Response) {
    const {email, password} = req.body;
    User
      .getOneUserByQuery({email})
      .then( (user: any)  => {
        return compareSync(password, user.password)
        //TODO generate token send token or try passport
      })
      .catch()

      res.send('ok')
  }
  /**
   * GET one user by id
   */
export function signUp(req: Request, res: Response) {
    let {email, password} = req.body;

    password = hashSync(password.toString(), 10)

    User
      .createUser({email, password})
      .then( (user: any) => {
        console.log(user)
      })
      .catch()
      res.send('ok')
  }
