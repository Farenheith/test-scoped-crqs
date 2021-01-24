import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { MyRequest } from './my-request';
import { Inject, Injectable, Scope } from '@nestjs/common';
import { SomethingCommand } from './something.command';

@Injectable({ scope: Scope.REQUEST })
export class SomethingService {
  constructor(
    private readonly req: MyRequest,
    @Inject(REQUEST) private request: Request,
  ) {}

  async do(message: string): Promise<any> {
    console.log(SomethingCommand.name, message, this.req.request?.ip);
    console.log(SomethingCommand.name, message, this.request?.ip);
  }
}
