import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import transaction from 'sequelize/types/lib/transaction';
import { Ban } from './ban.model';

@Injectable()
export class BanService {
   constructor(@InjectModel(Ban) private banRepository: typeof Ban
   ) { }

   async createBan(reason: string, userid: number, transactionHost?: { transaction: transaction }) {
      await this.banRepository.create({ reason: reason, userid: userid }, transactionHost);
   }

   async getBanByUserId(userid: number) {
      return await this.banRepository.findOne({ where: { userid } });
   }

}
