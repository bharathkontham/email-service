import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
// import { EmailPayload } from './interfaces/email-payload.interface';
import { ISendMailOptions } from '@nestjs-modules/mailer';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { ApiTags, ApiBody } from '@nestjs/swagger';

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
  @ApiTags('Email')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        to: {
          type: 'string',
        },
        from: {
          type: 'string',
        },
        subject: {
          type: 'string',
        },
        text: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        template: {
          type: 'string',
        },
        content: {
          type: 'object',
          properties: {},
        },
      },
    },
  })
  async sendEmail(@Body() emailContent: ISendMailOptions): Promise<any> {
    await this.emailqueue.add('emailJob', emailContent);
    return 'Email added to Queue';
  }
}
