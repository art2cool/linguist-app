import Student from '../db/models/students';

class StudentsManager {
  /**
   * GET all Students.
   */
  public getAllStudents(): Promise<string> {
    return Student.find({})
  }
  /**
   * GET one Student by id
   */
  public getOneStudent(id: number): Promise<string> {
    return Student.findById(id)
  }
  /**
   * GET one Student by query
   */
  public getOneStudentByQuery(query: any): Promise<string> {
    return Student.findOne(query)
  }
  /**
  * CREATE Student
  */
  public createStudent(newStudent): Promise<string> {
    return Student.create(newStudent)
  }
  /**
  * UPDATE Student
  */
  public updateStudent(id: number, studentData): Promise<string> {
    return Student.findOneAndUpdate(studentData)
  }
}
const studentsManager = new StudentsManager();

export default studentsManager
