import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection().then(connection => {
    console.log("Database Success")
   
}).catch(error => console.log(error));