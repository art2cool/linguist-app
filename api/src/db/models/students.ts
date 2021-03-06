import * as mongoose from "mongoose";

mongoose.Promise = global.Promise;

const studentSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  email: { type: String, require: true, lowercase: true, trim: true, unique: true },
  phone: { type: String, trim: true },
  language: {
    type: String,
    enum: ['English', 'Polish', 'German', 'Japanese']
  },
  level: { type: String, enum: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] },
  notes: { type: String, trim: true },
  dayOfBirth: {
    type: Date
  },
  account: { type: Number }
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
