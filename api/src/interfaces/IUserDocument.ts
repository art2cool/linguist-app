import * as mongoose from "mongoose";
import IUser from "./IUser";

interface IUserDocument extends IUser, mongoose.Document{};

export default IUserDocument;
