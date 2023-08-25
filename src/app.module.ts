import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user-service/user-service';
import { UserControllerController } from './user-controller/user-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, UserControllerController],
  providers: [AppService, UserService],
})
export class AppModule {}
