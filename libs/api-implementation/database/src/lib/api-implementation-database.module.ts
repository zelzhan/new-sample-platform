import { Module } from '@nestjs/common';
import { DatabaseConnectionService } from './services/connection.service'

@Module({
  controllers: [],
  providers: [DatabaseConnectionService],
  exports: [DatabaseConnectionService],
})
export class ApiImplementationDatabaseModule {}
