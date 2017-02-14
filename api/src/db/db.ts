"use script";

import * as mongoose from 'mongoose';

class MongoDb {
  constructor(connectionString) {
    this._connectionString = connectionString;
  }


  connect = () => new Promise((resolve, reject) => {
    mongoose.connect(this._connectionString);

    const db = mongoose.connection;
    db.on('error', reject);
    db.once('open', resolve);
  })
}


export default MongoDb;
