import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoleDto } from './dto/role.dto';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {

   constructor(private roleService: RoleService) { }

   @Post()
   create(@Body() dto: RoleDto) {
      return this.roleService.createRole(dto);
   }

   @Get('/:value')
   getByValue(@Param('value') name: string) {
      return this.roleService.getRole(name);
   }


}
