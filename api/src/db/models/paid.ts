import * as mongoose from "mongoose";

mongoose.Promise = global.Promise;

const paidSchema = new mongoose.Schema({
  date: { type: Date },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  count: {type: Number}
});

const Class = mongoose.model('Class', paidSchema);

export default Class;
