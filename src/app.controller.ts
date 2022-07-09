import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
// import { EmailPayload } from './interfaces/email-payload.interface';
import { ISendMailOptions } from '@nestjs-modules/mailer';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectQueue('emailqueue') private readonly emailqueue: Queue,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/sendemail')
  async sendEmail(@Body() emailContent: ISendMailOptions): Promise<any> {
    await this.emailqueue.add('emailJob', emailContent);
    return 'Email added to Queue';
  }
}
