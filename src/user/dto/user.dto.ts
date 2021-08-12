import { IsEmail, IsString, MinLength } from "class-validator";

export class UserDto {
   @IsString({ message: 'Повинно буди строкою' })
   readonly phone: string;
   @IsString({ message: 'Повинно буди строкою' })
   @IsEmail({}, { message: 'Не коректний mail' })
   readonly email: string;
   @IsString({ message: 'Повинно буди строкою' })
   @MinLength(6, { message: 'Пароль має бути не менше 6 символів' })
   readonly password: string;
}