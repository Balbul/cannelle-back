import { DateController } from './date.controller';
import { DateService } from './date.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [DateController],
  providers: [DateService],
})
export class DateModule {}
