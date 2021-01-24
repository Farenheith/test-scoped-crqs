import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Request } from 'express';
import { SomethingCommand } from './something.command';

@CommandHandler(SomethingCommand)
@Injectable({ scope: Scope.REQUEST })
export class SomethingHandler implements ICommandHandler<SomethingCommand> {
  constructor(@Inject(REQUEST) private readonly req: Request) {}
  async execute(command: SomethingCommand): Promise<any> {
    console.log(SomethingCommand.name, command.message, this.req?.ip);
  }
}
