import { SomethingService } from './something.service';
import { MyRequest } from './my-request';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SomethingCommand } from './something.command';
import { Injectable, Scope } from '@nestjs/common';

@CommandHandler(SomethingCommand)
@Injectable({ scope: Scope.REQUEST })
export class SomethingHandler implements ICommandHandler<SomethingCommand> {
  constructor(
    private readonly req: MyRequest,
    private readonly service: SomethingService,
  ) {}

  async execute(command: SomethingCommand): Promise<any> {
    this.req.request = command.req;
    this.service.do(command.message);
  }
}
