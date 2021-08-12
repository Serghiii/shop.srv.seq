import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { ROLE_KEY } from "./role.decorator";

@Injectable()
export class RoleGuard implements CanActivate {
   constructor(private jwtService: JwtService,
      private reflector: Reflector) { }

   canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
      try {
         const requiredRoles = this.reflector.get<string[]>(ROLE_KEY, context.getHandler());
         const req = context.switchToHttp().getRequest();
         return req.user.role.some(role => requiredRoles.includes(role.name));
      } catch (e) {
         throw new HttpException('Немає доступу', HttpStatus.FORBIDDEN);
      }
   }

}