import User from '../db/models/user';
import IUserDocument from "../interfaces/IUserDocument";

class UserMenager {
  /**
   * GET all Users.
   */
  public getAllUsers(): Promise<string> {
    return User.find({})
  }
  /**
   * GET one user by id
   */
  public getOneUser(id: number): Promise<string> {
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
const userMenager = new UserMenager();

export default userMenager
