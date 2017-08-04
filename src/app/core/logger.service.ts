import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {
  static log(msg: string) {
    console.log(msg);
  }

  static error(msg: string, obj = {}) {
    console.error(msg, obj);
  }
}
