import User from '../db/models/user';
import IUserDocument from "../interfaces/IUserDocument";

class UserManager {
  /**
   * GET all Users.
   */
  public getAllUsers(): Promise<string> {
    return User.find({})
  }
  /**
   * GET one user by id
   */
  public getOneUser(id: any): Promise<any> {
    return User.findById(id)
  }
  /**
   * GET one user by query
   */
  public getOneUserByQuery(query: any): Promise<string> {
    return User.findOne(query)
  }
  /**
  * CREATE user
  */
  public createUser(newUser: IUserDocument): Promise<string> {
    return User.create(newUser)
  }
  /**
  * UPDATE user
  */
  public updateUser(id: number, userData: IUserDocument): Promise<string> {
    return User.findOneAndUpdate(userData)
  }
}
const userManager = new UserManager();

export default userManager
