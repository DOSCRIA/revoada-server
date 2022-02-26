import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.error('aas')
    return 'Hello World!';
  }
}
