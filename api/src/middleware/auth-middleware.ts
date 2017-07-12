import {Request, Response, NextFunction} from 'express';

let utils = {
    hendleError(res: Response, code: number, e:string) {
        res.status(code).send(e);
    }
}


import User from '../menagers/userMenager';

export function comparePasswords(req: Request, res: Response, next: NextFunction) {
    const {password, password2} = req.body;

    if(!password || !password2) {
        return utils.hendleError(res, 422, 'both of passwords should be exists')
    }

    if(password !== password2) {
        return utils.hendleError(res, 422, 'password shoul be match')
    }

    next()
}