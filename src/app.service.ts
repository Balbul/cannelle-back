import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Binvenue sur l'API de cannelle";
  }
}
