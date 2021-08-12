import { IsString, MinLength } from "class-validator";

export class LoginDto {
   @IsString({ message: 'Повинно буди строкою' })
   readonly username: string;
   @IsString({ message: 'Повинно буди строкою' })
   @MinLength(6, { message: 'Пароль має бути не менше 6 символів' })
   readonly password: string;
}