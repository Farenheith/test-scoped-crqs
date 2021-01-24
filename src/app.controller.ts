import { REQUEST } from '@nestjs/core';
import { Controller, Get, Inject, Scope } from '@nestjs/common';
import { SomethingCommand } from './commands/something/something.command';
import { Request } from 'express';
import { MyCommandBus } from './transient-command-bus';
@Controller({
  scope: Scope.REQUEST,
})
export class AppController {
  constructor(
    private readonly commandBus: MyCommandBus,
    @Inject(REQUEST) private request: Request,
  ) {}

  @Get()
  async getHello(): Promise<void> {
    return await this.commandBus.execute(
      new SomethingCommand('test', this.request),
    );
  }
}
