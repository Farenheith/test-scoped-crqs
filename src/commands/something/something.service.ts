import { MyRequest } from './my-request';
import { Injectable, Scope } from '@nestjs/common';
import { SomethingCommand } from './something.command';

@Injectable({ scope: Scope.REQUEST })
export class SomethingService {
  constructor(private readonly req: MyRequest) {}
  async do(message: string): Promise<any> {
    console.log(SomethingCommand.name, message, this.req.request?.ip);
  }
}
