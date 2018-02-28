import { Request, Response, NextFunction } from 'express';
import { handleError } from './../utils';
import userManager from './../managers/userManager';
import jwtService from './../services/jwtService';

import User from '../managers/userManager';

export function comparePasswords(req: Request, res: Response, next: NextFunction) {
  const { password, password2 } = req.body;

  if (!password || !password2) {
    return handleError(res, 422, 'both of passwords should be exists')
  }

  if (password !== password2) {
    return handleError(res, 422, 'password shoul be match')
  }

  next();
}

export function isAuthorized(req: Request, res: Response, next: NextFunction) {
  console.log('auth-middleware')
  if (!req.headers.authorization) {
    return handleError(res, 403, 'TOKEN HASN\'T SET IN HEADERS')
  }
  const token = req.headers.authorization.split(' ')[1];
  console.log(token);
  const authUser = new Promise((resolve, reject) => {
    jwtService.decodeToken(token, (err, decoded) => {
      if (err) reject(err);
      console.log('decoded', decoded)
      resolve(decoded.id);
    });
  })
  authUser
    .then((id) => {
      return userManager.getOneUser(id);
    })
    .then((user) => {
      const token = 'Bearer ' + jwtService.createToken(user._id, 'admin');
      res.header('authorization', token);

      next();
    })
    .catch((e) => handleError(res, 403, 'Forbiden'))

}