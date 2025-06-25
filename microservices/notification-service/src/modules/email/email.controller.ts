import { Controller } from '@nestjs/common';
import { EmailService } from './email.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) { }


  @MessagePattern('active-account')
  getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
    console.log(`Pattern: ${context.getPattern()}`);
    console.log(`data: ${data}`);
  }
}
