import { Module } from '@nestjs/common';
import { CustomerController } from './customer/customer.controller';

@Module({
  controllers: [CustomerController],
})
export class BackofficeModule {}
