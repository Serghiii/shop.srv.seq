import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { RoleGuard } from 'src/auth/role.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

export const ROLE_KEY = 'roles';

export function hasRole(...roles: string[]) {
   return applyDecorators(
      UseGuards(JwtAuthGuard),
      SetMetadata(ROLE_KEY, roles),
      UseGuards(RoleGuard),
   );
}