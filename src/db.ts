import "reflect-metadata";
import {  DataSourceOptions } from "typeorm";

const dotenv = require('dotenv');
dotenv.config({
    path: './config.env'
})
import { Photo } from './entity/Entity'



const config: DataSourceOptions = {
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: 3306,
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "abhaydb",
    entities: [
        Photo
    ],
    synchronize: true,
    logging: false
}
export default config
// import {createConnection} from "typeorm";

// createConnection({
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: "",
//     database: "demo_ts",
//     entities: [
//        __dirname + "/entity/*.ts"
//     ],
//     synchronize: true,
//     logging: false
//   }).then(async connection => {
//   console.log("connection done");
//   }).catch(error => console.log(error));