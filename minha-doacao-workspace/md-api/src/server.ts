import "reflect-metadata";
import './database/connection';
import router from "./routes";
import express from 'express'

const app = express();
app.use(express.json());
app.use(router);
app.listen(8080, () => console.log('Hello Galinha da Agua!'));
