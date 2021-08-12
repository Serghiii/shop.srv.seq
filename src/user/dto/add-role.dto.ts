import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
   @IsString({ message: 'Повинно буди строкою' })
   readonly value: string;
   @IsNumber({}, { message: 'Повинно буди числом' })
   readonly userId: number;
}