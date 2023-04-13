import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { userInfo, userInfoSchema } from 'src/models/user/entities/userinfo.entity';

@Injectable()
export class UserService {
    constructor(@InjectModel(userInfo.name) private userInfoModel: Model<userInfo>) { }

    getAllUserInfo(): Promise<any> {
        return this.userInfoModel.find({ name: "louis" }).exec();
    }
}
