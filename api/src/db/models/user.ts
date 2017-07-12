import * as mongoose from "mongoose";
import IUserDocument from "../../interfaces/IUserDocument";

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    email: { type: String, require: true, lowercase: true, trim: true, unique: true },
    password: { type: String, require: true },
    role: String,
    phone: String,
});

const User = mongoose.model<IUserDocument>("User", userSchema);

export default User;
