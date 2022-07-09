import { HttpStatus, HttpException, Injectable, Logger } from '@nestjs/common';
// import { EmailPayload } from './interfaces/email-payload.interface';
import { MailerService, ISendMailOptions } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    return 'Hello World!';
  }

  async sendEmail(emailContent: ISendMailOptions): Promise<any> {
    try {
      this.logger.log('sendEmail');
      emailContent.from = this.configService.get('MAIL_FROM');
      return await this.mailerService.sendMail(emailContent);
    } catch (error) {
      this.logger.error(error);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
