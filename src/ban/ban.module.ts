import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ban } from './ban.model';
import { BanService } from './ban.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Ban])
  ],
  exports: [BanService],
  providers: [BanService]
})
export class BanModule { }
