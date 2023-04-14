import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { UserService } from './login/user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userInfo, userInfoSchema } from 'src/models/user/entities/userinfo.entity';

@Module({
  controllers: [LoginController],
  providers: [UserService],
  imports: [MongooseModule.forFeature([
    {name: userInfo.name,
    schema: userInfoSchema}
  ]),]
})
export class UserModule { }
