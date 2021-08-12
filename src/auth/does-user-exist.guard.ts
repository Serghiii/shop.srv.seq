import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { UserService } from "src/user/user.service";

@Injectable()
export class DoesUserExist implements CanActivate {
   constructor(private readonly userService: UserService) { }

   canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
      const request = context.switchToHttp().getRequest();
      return this.validateRequest(request);
   }

   async validateRequest(request) {
      const user = await this.userService.getUserByLogin(request.body.phone, request.body.email);
      if (user) throw new ForbiddenException('This user already exist');
      return true;
   }
}