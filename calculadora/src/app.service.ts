import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // console.log('log!');
    // console.log('debug!');
    // console.log('warn!');
    // console.log('error!');
    return 'Hello World!-';
  }
}
