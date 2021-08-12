import { Body, Controller, Post, Res, Request, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { UserDto } from 'src/user/dto/user.dto';
import { AuthService } from './auth.service';
import { DoesUserExist } from './does-user-exist.guard';
import { LoginDto } from './dto/login.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {

   constructor(private authService: AuthService,
   ) { }

   @UseGuards(LocalAuthGuard)
   @Post('/login')
   login(@Body() loginDto: LoginDto, @Request() req, @Res({ passthrough: true }) res: Response) {
      // const { token } = await this.authService.login(loginDto);
      // res.cookie('__t', token, { path: '/', httpOnly: true, signed: true });
      // return "Ok";
      return this.authService.login(req.user);
   }

   @UseGuards(DoesUserExist)
   // @UseInterceptors(TransactionInterceptor)
   @Post('/register')
   register(@Body() userDto: UserDto //, @TransactionParam() transaction: Transaction
   ) {
      return this.authService.register(userDto);
   }

}
