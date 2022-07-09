import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EmailPayload } from './interfaces/email-payload.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async sendEmail(emailContent: EmailPayload): Promise<any> {
    return this.appService.sendEmail(emailContent);
  }
}
