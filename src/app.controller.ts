import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
// import { EmailPayload } from './interfaces/email-payload.interface';
import { ISendMailOptions } from '@nestjs-modules/mailer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async sendEmail(emailContent: ISendMailOptions): Promise<any> {
    return this.appService.sendEmail(emailContent);
  }
}
