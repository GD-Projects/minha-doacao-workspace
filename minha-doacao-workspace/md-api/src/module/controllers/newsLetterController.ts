import { Request, Response } from "express";
import NewsLetter from "../entity/newsLetter";
import EmailController from "./emailController"
import { getRepository } from "typeorm";

class NewsLetterController {
    async store(req: Request, res: Response){
        // Criação de um registro na Tabela Newsletter
        const repository = getRepository(NewsLetter);
        const emailAddress = req.body;
        const createNewsLetter = repository.create(emailAddress);
        await repository.save(createNewsLetter);
        
        // Envio de e-mail de boas vindas
        const NewsletterMesage = {
            to: emailAddress.email,
            from: process.env.FROM_EMAIL,
            subject: 'Bem vindo a Minha Doação!',
            text: 'Seja muito bem vindo a Minha Doação!!',
            html: '<strong>Por meio desse portal, enviaremos muitas notícias e atualizações!</strong>',
        }
        await EmailController.sendEmail(NewsletterMesage);
        
        return res.json(createNewsLetter);        
    }
 }
export default new NewsLetterController();