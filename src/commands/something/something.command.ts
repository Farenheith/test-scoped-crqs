import { Request } from 'express';
export class SomethingCommand {
  constructor(readonly message: string, readonly req: Request) {}
}
