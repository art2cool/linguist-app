import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
//import UserRouter from './routes/UserRouter';
import mainRouter from './routes';
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
    this.express.use(express.static(path.join(__dirname, 'public')))
    this.express.use(express.static(path.join(__dirname, 'build')))
    this.express.use(this.corsHeaders)
  }
  // Configure API endpoints.
  private routes(): void {

    this.express.use('/', mainRouter);
  }
  private db(): void{
    let db = new Mongodb('localhost:27017/linguist_dev')
    db.connect();
  }

  private corsHeaders(req, res, next): void {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    res.header('Access-Control-Expose-Headers', 'authorization');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  }  

}

export default new App().express;
