import { Controller, Get } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { SomethingCommand } from './commands/something/something.command';

@Controller()
export class AppController {
  constructor(private readonly commandBus: CommandBus) {}

  @Get()
  async getHello(): Promise<void> {
    return await this.commandBus.execute(new SomethingCommand('test'));
  }
}
