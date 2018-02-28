import * as mongoose from 'mongoose';
import IUserDocument from '../../interfaces/IUserDocument';

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    email: { type: String, require: true, lowercase: true, trim: true, unique: true },
    password: { type: String, require: true },
    role: {type: String, enum: ['admin', 'teacher']},
    phone: String,
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }],
    coeficient: {type: Number}
});

userSchema.methods.toJSON = function () {
    let user = this.toObject();
    delete user.password;

    return user;
};

const User = mongoose.model<IUserDocument>('User', userSchema);

export default User;
