import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { userInfo, userInfoSchema } from './models/user/entities/userinfo.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://jblouislee:ZtnEecPZkKpY6NeE@cluster0.e89ktwd.mongodb.net/test'),
    MongooseModule.forFeature([
      {name: userInfo.name,
      schema: userInfoSchema}
    ]),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
