import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import UserRouter from './routes/UserRouter';
import Mongodb from './db/db';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.db();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();

    this.express.use('/', router);
    this.express.use('/api/v1/users', UserRouter);
  }
  private db(): void{
    let db = new Mongodb('localhost:27017/bookstore')
    db.connect();
  }

}

export default new App().express;
