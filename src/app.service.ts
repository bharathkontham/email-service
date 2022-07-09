import { Injectable, Logger } from '@nestjs/common';
import { EmailPayload } from './interfaces/email-payload.interface';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    return 'Hello World!';
  }

  async sendEmail(emailContent: EmailPayload): Promise<any> {
    this.logger.log('sendEmail');
    return emailContent;
  }
}
