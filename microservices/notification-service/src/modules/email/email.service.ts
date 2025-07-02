import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { IMailActive } from 'src/interface/mail-active.interface';

@Injectable()
export class EmailService {
        constructor(private readonly mailerService: MailerService) { }

        async sendMailActiveAccount(data: IMailActive) {
                await this.mailerService.sendMail({
                        to: data.email,
                        subject: 'Chào mừng bạn đến với ứng dụng!',
                        template: `mailActive`, // tên file trong thư mục templates
                        context: data,
                });
        }
}
