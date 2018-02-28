import {Request, Response, NextFunction} from 'express';

import Student from '../managers/studentsManager';

export class StudentsController {
  /**
   * GET all Students.
   */
  public getAll(req: Request, res: Response) {
    Student
      .getAllStudents()
      .then(students => {
        res.send(students);
    })
      .catch(e => {
        res.send(e);
    })
  }
  /**
   * GET one student by id
   */
  public getOne(req: Request, res: Response) {
    let id = req.params.id;
    Student
      .getOneStudent(id)
      .then(student => {
        res.send(student);
    })
      .catch(e => {
        res.send(e);
    })
  }
  /**
  * CREATE student
  */

  public createStudent(req: Request, res: Response) {
    let newStudent = req.body;
    console.log(newStudent)
    Student
      .createStudent(newStudent)
      .then(student => {
        res.send(student);
    })
      .catch(e => {
        res.send(e);
    })
  }
  /**
  * UPDATE student
  */
  public updateStudent(req: Request, res: Response) {
    let id = req.params.id;
    let studentData = req.body.data;
    Student
      .updateStudent(id, studentData)
      .then(student => {
        res.send(student);
    })
      .catch(e => {
        res.send(e);
    })
  }
}

const studentsController = new StudentsController();

export default studentsController
