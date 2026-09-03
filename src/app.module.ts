import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { postgresConfig } from './config/db.config.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(postgresConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
