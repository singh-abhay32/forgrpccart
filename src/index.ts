import http from 'http';
import express, { Express } from 'express';
import main from '../proto/server';
import "reflect-metadata"
import { DataSource } from "typeorm";
import { datalog } from './task-manager/db';
import routes from './routes';
import cors from 'cors';
import { createConnection } from "typeorm";
import dbConfig from "./db";


var mysql = require('mysql');
const router: Express = express();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use((req, res, next) => {
  
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});



// datalog.connect(function(err:any) {
//     if (err) {
//       return console.error('error: ' + err.message);
//     }  
//     console.log('Connected to the MySQL server.');
//   });
  router.use(cors());
  router.use('/', routes);
  
router.use((req, res) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);
const startServer = (async function () {
const db =  createConnection(dbConfig)
if((await db).isConnected)
{
    console.log("db conncted");
}
})


const PORT: any = process.env.PORT ?? 6000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
startServer();

main()

