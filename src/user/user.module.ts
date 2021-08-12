import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ActivationModule } from 'src/activation/activation.module';
import { AuthModule } from 'src/auth/auth.module';
import { BanModule } from 'src/ban/ban.module';
import { MailModule } from 'src/mail/mail.module';
import { Role } from 'src/role/role.model';
import { RoleModule } from 'src/role/role.module';
import { UserRole } from './user-role.model';
import { UserController } from './user.controller';
import { User } from './user.model';
import { UserService } from './user.service';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Role, UserRole]),
    RoleModule,
    ActivationModule,
    BanModule,
    MailModule,
    forwardRef(() => AuthModule)
  ],
  exports: [
    UserService
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
