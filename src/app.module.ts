import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.model';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { Role } from './role/role.model';
import { UserRole } from './user/user-role.model';
import { AuthModule } from './auth/auth.module';
import { Activation } from './activation/activation.model';
import { ActivationModule } from './activation/activation.module';
import { BanModule } from './ban/ban.module';
import { Ban } from './ban/ban.model';
import { resolve } from 'path';
import { DeviceModule } from './device/device.module';
import { Device } from './device/device.model';
import { Category } from './category/category.model';
import { Brand } from './brand/brand.model';
import { Type } from './type/type.model';
import { Prop } from './prop/prop.model';
import { BrandModule } from './brand/brand.module';
import { CategoryModule } from './category/category.module';
import { TypeModule } from './type/type.module';
import { BasketModule } from './basket/basket.module';
import { Basket } from './basket/basket.model';
import { Dialect } from 'sequelize/types';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/profile.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.${process.env.NODE_ENV}.env`, '.env']
    }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: <Dialect>process.env.DB_DIALECT,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DB,
      timezone: 'Europe/Kiev',
      dialectOptions: {
        timezone: "local",
      },
      autoLoadModels: Boolean(process.env.AUTOLOAD_MODELS),
      models: [User, Role, UserRole, Activation, Ban, Profile, Device, Category, Brand, Type, Prop, Basket],
    }),
    UserModule,
    RoleModule,
    AuthModule,
    ActivationModule,
    BanModule,
    Profile,
    DeviceModule,
    BrandModule,
    CategoryModule,
    TypeModule,
    BasketModule,
    ProfileModule],
  controllers: [],
  providers: [],
})
export class AppModule { }