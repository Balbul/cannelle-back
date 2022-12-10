import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DateModule } from './date/date.module';
import { Module } from '@nestjs/common';
import { PingModule } from './ping/ping.module';
import { RecetteModule } from './recette/recette.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    PingModule,
    DateModule,
    RecetteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
