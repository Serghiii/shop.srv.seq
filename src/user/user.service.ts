import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import sequelize from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { ActivationService } from 'src/activation/activation.service';
import { Ban } from 'src/ban/ban.model';
import { MailService } from 'src/mail/mail.service';
import { Role } from 'src/role/role.model';
import { RoleService } from 'src/role/role.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { UserDto } from './dto/user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {

   constructor(@InjectModel(User) private userRepository: typeof User,
      private roleService: RoleService,
      private activationService: ActivationService,
      private mailService: MailService,
      private sequelize: Sequelize
   ) { }

   async createUser(dto: UserDto, role: string) {
      try {
         return await this.sequelize.transaction(async (t) => {
            const transactionHost = { transaction: t };
            const user = await this.userRepository.create(dto, transactionHost);
            const role_ = await this.roleService.getRole(role);
            await user.$set('role', [role_.id], transactionHost);
            user.role = [role_];
            const activation = await this.activationService.createActivation(user.id, transactionHost);
            await this.mailService.sendMail(user.email, `${process.env.API_URL}/user/activate/${activation.uuid}`)
            return user;
         });
      } catch (e) {
         return undefined;
      }
   }

   async activateUser(uuid: string) {
      try {
         await this.sequelize.transaction(async (t) => {
            const transactionHost = { transaction: t };
            const activation = await this.activationService.getActivation(uuid);
            const user = await this.getUserById(activation.userid);
            user.active = true;
            await user.save(transactionHost);
            await this.activationService.deleteActivation(activation.uuid, transactionHost);
         });
      } catch (e) {
         throw new HttpException('Не вдалося активувати користувача', HttpStatus.BAD_REQUEST);
      }
      return '<div><h1>Користувач активований</h1></div>'
   }

   async getAllUsers() {
      return await this.userRepository.findAll({ include: { all: true } });
   }

   async getUserByLogin(phone: string, email: string) {
      return await this.userRepository.findOne({ where: { [sequelize.Op.or]: [{ phone }, { email }] }, include: [{ model: Role }, { model: Ban }] });
   }

   async getUserById(id: number) {
      return await this.userRepository.findByPk(id);
   }

   async addRole(dto: AddRoleDto) {
      const user = await this.userRepository.findByPk(dto.userId);
      const role = await this.roleService.getRole(dto.value);
      if (role && user) {
         await user.$add('role', role.id);
         return dto;
      }
      throw new HttpException('Користувач або роль не знайдені', HttpStatus.NOT_FOUND);
   }

   async ban(dto: BanUserDto) {
      const user = await this.userRepository.findByPk(dto.userId);
      if (!user) {
         throw new HttpException('Користувача не знайдено', HttpStatus.NOT_FOUND);
      }
      return user;
   }

}
