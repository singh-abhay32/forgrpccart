import mysql = require('mysql')
import express from 'express';
import bodyParser from "body-parser";

 var app = express()
 app.use(bodyParser.json());

 export const datalog = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port : 3306,
    database: 'Abhaydb'
});

    
 





