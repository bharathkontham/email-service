import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { AppService } from './app.service';

@Processor(
  {
    name: 'emailqueue',
  },
  {
    concurrency: 10,
  },
)
export class EmailProcessor extends WorkerHost {
  constructor(private readonly appService: AppService) {
    super();
  }
  private readonly logger = new Logger(EmailProcessor.name);

  async process(job: Job): Promise<void> {
    this.logger.log(`process email job #${job.id}`);
    await this.appService.sendEmail(job.data);
  }
}
