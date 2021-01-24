import { ContextIdFactory, REQUEST } from '@nestjs/core';
import { CommandBus, ICommand, ICommandBus } from '@nestjs/cqrs';
import { Inject } from '@nestjs/cqrs/node_modules/@nestjs/common';
import { Injectable, Scope } from '@nestjs/cqrs/node_modules/@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class MyCommandBus implements ICommandBus {
    constructor(
        @Inject(REQUEST) private request: any,
        private commandBus: CommandBus,
    ) {}

    execute<T extends ICommand>(command: T): Promise<any> {
    return this.commandBus.execute(
      command,
      ContextIdFactory.getByRequest(this.request),
    );
    }
}