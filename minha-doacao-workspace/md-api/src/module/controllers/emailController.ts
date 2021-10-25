class EmailController {

    async sendEmail(msg: any) {    
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);    
 
    try {
        const result = await sgMail.send(msg);
        console.log('Email sent', result);
    }
    catch (error) {
        console.error(error)
    }
    return console.log('Email enviado!')
};
}
export default new EmailController();