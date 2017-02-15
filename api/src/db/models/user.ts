import * as mongoose from "mongoose";

mongoose.Promise = global.Promise;

interface IUser{
    id: number,
    name?: string,
    email: string,
    password: string,
    gender?: string,
    hair: string,
    eyes: string,
}

interface IUserModel extends IUser, mongoose.Document{};

const userSchema = new mongoose.Schema({
    name: {type: String, trim: true},
    email: {type: String, require: true, lowercase: true, trim: true},
    password: {type: String, require: true},
    gender: {type: String, enum: ['male', 'female']},
    hair: String,
    eyes: String
});

const User = mongoose.model<IUserModel>("User", userSchema);

export default User;
