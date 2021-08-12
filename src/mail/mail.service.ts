import { Injectable } from '@nestjs/common';
const nodemailer = require('nodemailer');

@Injectable()
export class MailService {
   transporter: any;
   constructor() {
      this.transporter = nodemailer.createTransport({
         host: process.env.SMTP_HOST,
         port: Number(process.env.SMTP_PORT),
         secure: false,
         auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
         },
      });
   }

   async sendMail(to: string, link: string) {
      return this.transporter.sendMail({
         from: process.env.SMTP_USER,
         to,
         subject: 'Активація аккаунта на ' + process.env.API_URL + ' ✔',
         html: `<div><h2>Для активації перейдіть за посиланням</h2><a href="${link}">${link}</a></a></div>`
      });
   }

}
