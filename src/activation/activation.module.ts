import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Activation } from './activation.model';
import { ActivationService } from './activation.service';

@Module({
   imports: [
      SequelizeModule.forFeature([Activation])
   ],
   exports: [ActivationService],
   providers: [ActivationService]
})
export class ActivationModule { }
