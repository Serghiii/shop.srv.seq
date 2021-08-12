import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { hasRole } from 'src/auth/role.decorator';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@Controller('user')
export class UserController {

   constructor(private readonly userService: UserService) { }

   @hasRole("USER")
   @Get()
   getAll() {
      return this.userService.getAllUsers();
   }

   @Get('/activate/:value')
   activate(@Param('value') value: string) {
      return this.userService.activateUser(value);
   }

   @Post()
   create(@Body() userDto: UserDto) {
      return this.userService.createUser(userDto, 'USER');
   }

   @hasRole("ADMIN")
   @Post('/role')
   addRole(@Body() dto: AddRoleDto) {
      return this.userService.addRole(dto);
   }

   @hasRole("ADMIN")
   @Post('/ban')
   ban(@Body() dto: BanUserDto) {
      return this.userService.ban(dto);
   }

}
