import { Module } from '@nestjs/common';
import { PropService } from './prop.service';

@Module({
  providers: [PropService]
})
export class PropModule { }
