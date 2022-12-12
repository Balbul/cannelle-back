import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DateModule } from './date/date.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
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
    MongooseModule.forRoot(configuration().database.host),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
