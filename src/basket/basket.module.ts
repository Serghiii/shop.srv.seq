import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';

@Module({
  providers: [BasketService]
})
export class BasketModule {}
