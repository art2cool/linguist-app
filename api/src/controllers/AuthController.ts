import { Request, Response, NextFunction } from 'express';
import { hashSync, compareSync } from 'bcrypt';
import IUserDocument from "../interfaces/IUserDocument";
import { handleError } from './../utils';
import jwt from './../services/jwtService';

import User from '../managers/userManager';

/**
 * signIn
 */
export function signIn(req: Request, res: Response) {
  const { email, password } = req.body;
  User
    .getOneUserByQuery({ email })
    .then((user: any) => {
      if (!user || !compareSync(password.toString(), user.password)) {
        throw 'User not found!';
      }
      const token = jwt.createToken(user.id, user.role)
      res.setHeader('authorization', token);
      res.send({
        err: null,
        data: {
          user: user,
          token
        }
      })
    })
    .catch(err => {
      return handleError(res, 400, err);
    })

  }
/**
 * GET one user by id
 */
export function signUp(req: Request, res: Response) {
  let { email, password } = req.body;

  password = hashSync(password.toString(), 10)

  User
    .createUser({ email, password })
    .then((user: any) => {
      console.log(user)
    })
    .catch()
  res.send('ok')
}
