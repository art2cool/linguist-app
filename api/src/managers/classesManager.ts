import Class from '../db/models/class';

class ClassesManager {
  /**
   * GET all Classes.
   */
  public getAllClasses(): Promise<string> {
    return Class.find({})
  }
  /**
   * GET one Class by id
   */
  public getOneClass(id: number): Promise<string> {
    return Class.findById(id)
  }
  /**
   * GET one Class by query
   */
  public getOneClassByQuery(query: any): Promise<string> {
    return Class.findOne(query)
  }
  /**
  * CREATE Class
  */
  public createClass(newClass): Promise<string> {
    return Class.creat(newClass)
  }
  /**
  * UPDATE Class
  */
  public updateClass(id: number, classData): Promise<string> {
    return Class.findOneAndUpdate(classData)
  }
}
const classesManager = new ClassesManager();

export default classesManager
