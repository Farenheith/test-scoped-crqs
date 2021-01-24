import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from './app.controller';
import { Handlers } from './commands';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [...Handlers],
})
export class AppModule {}
