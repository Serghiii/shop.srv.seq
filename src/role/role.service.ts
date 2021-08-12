import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RoleDto } from './dto/role.dto';
import { Role } from './role.model';

@Injectable()
export class RoleService {

   constructor(@InjectModel(Role) private roleRepository: typeof Role) { }

   async createRole(dto: RoleDto) {
      const role = await this.roleRepository.create(dto);
      return role;
   }

   async getRole(name: string) {
      const role = await this.roleRepository.findOne({ where: { name } });
      return role;
   }

}
