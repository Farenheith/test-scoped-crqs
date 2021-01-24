import { REQUEST } from '@nestjs/core';
import { Controller, Get, Inject, Scope } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { SomethingCommand } from './commands/something/something.command';
import { Request } from 'express';
@Controller({
  scope: Scope.REQUEST,
})
export class AppController {
  constructor(
    private readonly commandBus: CommandBus,
    @Inject(REQUEST) private request: Request,
  ) {}

  @Get()
  async getHello(): Promise<void> {
    return await this.commandBus.execute(
      new SomethingCommand('test', this.request),
    );
  }
}
