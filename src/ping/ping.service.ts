import { Injectable } from '@nestjs/common';

@Injectable()
export class PingService {
  sendPing() {
    return 'pong';
  }
}
