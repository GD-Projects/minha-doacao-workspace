import { Request, Response } from "express";
import NewsLatter from "../entity/newsLetter";
import EmailController from "./emailController"
import { getRepository } from "typeorm";
import { validate } from 'class-validator';

class NewsLetterController {
    async store(req: Request, res: Response){
        // Criação de um registro na Tabela Newslatter
        const repository = getRepository(NewsLatter);
        const {email} = req.body;
        const createNewsLetter = repository.create({email});

        // Validação da requisição
        const validation = await validate(createNewsLetter);        
        if (validation.length === 0){
            await repository.save(createNewsLetter);
                 
        // Envio de e-mail de boas vindas
        const NewslatterMesage = {
            to: email,
            from: process.env.FROM_EMAIL,
            subject: 'Bem vindo a Minha Doação!',
            text: 'Seja muito bem vindo a Minha Doação!!',
            html: '<strong>Por meio desse portal, enviaremos muitas notícias e atualizações!</strong>',
        }
        await EmailController.sendEmail(NewslatterMesage);
        
        return res.json(createNewsLetter);        
    } res.status(400).json(validation)};
 }

export default new NewsLetterController();