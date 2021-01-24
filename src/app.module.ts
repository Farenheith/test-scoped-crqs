import { Services, Utils } from './commands/index';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from './app.controller';
import { Handlers } from './commands';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [...Handlers, ...Services, ...Utils],
})
export class AppModule {}
