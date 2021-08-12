import { IsString } from "class-validator";

export class RoleDto {
   @IsString({ message: 'Повинно буди строкою' })
   readonly name: string;
   @IsString({ message: 'Повинно буди строкою' })
   readonly description: string;
}