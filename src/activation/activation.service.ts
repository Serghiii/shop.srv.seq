import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import transaction from 'sequelize/types/lib/transaction';
import { Activation } from './activation.model';

@Injectable()

export class ActivationService {
   constructor(@InjectModel(Activation) private activationRepository: typeof Activation
   ) { }

   async createActivation(userid: number, transactionHost?: { transaction: transaction }) {
      return await this.activationRepository.create({ userid: userid }, transactionHost);
   }

   async getActivation(uuid: string) {
      return await this.activationRepository.findByPk(uuid);
   }

   async deleteActivation(uuid: string, transactionHost?: { transaction: transaction }) {
      await (await this.activationRepository.findByPk(uuid)).destroy(transactionHost);
   }

}
