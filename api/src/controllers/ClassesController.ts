import {Request, Response, NextFunction} from 'express';

import Class from '../managers/classesManager';

export class ClassesController {
  /**
   * GET all Classes.
   */
  public getAll(req: Request, res: Response) {
    Class
      .getAllClasses()
      .then(classes => {
        res.send(classes);
    })
      .catch(e => {
        res.send(e);
    })
  }
  /**
   * GET one classP by id
   */
  public getOne(req: Request, res: Response) {
    let id = req.params.id;
    Class
      .getOneClass(id)
      .then(classP => {
        res.send(classP);
    })
      .catch(e => {
        res.send(e);
    })
  }
  /**
  * CREATE classP
  */

  public createClass(req: Request, res: Response) {
    let newClassP = req.body;
    Class
      .createClass(newClassP)
      .then(classP => {
        res.send(classP);
    })
      .catch(e => {
        res.send(e);
    })
  }
  /**
  * UPDATE class
  */
  public updateClass(req: Request, res: Response) {
    let id = req.params.id;
    let classData = req.body.data;
    Class
      .updateClass(id, classData)
      .then(classP => {
        res.send(classP);
    })
      .catch(e => {
        res.send(e);
    })
  }
}

const classesController = new ClassesController();

export default classesController
