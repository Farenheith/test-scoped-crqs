import { MyRequest } from './something/my-request';
import { SomethingService } from './something/something.service';
import { SomethingHandler } from './something/something.handler';

export const Handlers = [SomethingHandler];
export const Services = [SomethingService];
export const Utils = [MyRequest];
