import "reflect-metadata";
import './database/connection';
import router from "./routes";
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.get('/teste', (req,res)=>{
    res.json('Olá Mundo, sejam bem vindos ao Minha Doação!!')
})

app.listen(8080, () => console.log('Hello Galinha da Agua!'));
