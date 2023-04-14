import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
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

    @Post('new')
    @HttpCode(201)
    async createNewAccount(@Body() newUser: any) {
        const res = await this.userService.createNewAccount(newUser)
        if (res) {
            return "success"
        } else {
            return "fail"
        }
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

