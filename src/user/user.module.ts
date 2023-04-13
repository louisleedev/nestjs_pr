import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { UserService } from './login/user/user.service';

@Module({
  controllers: [LoginController],
  providers: [UserService]
})
export class UserModule { }
