import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { UserService } from './user/user.service';

@Controller('login')
export class LoginController {

    constructor(private userService: UserService) { }

    @Get('')
    @HttpCode(200)
    async getAllUserInfos() {
        const res = await this.userService.getAllUserInfo()
        return res;
    }
    // @Get("isUserNameExist/:username")
    // @HttpCode(200)
    // checkUserExist(@Param() param: any) {
    //     console.log(param)
    //     if (param.username === "JR") {
    //         return 'user exists'
    //     } else {
    //         return 'user not exists'
    //     }
    // }
}

