import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { postgresConfig } from './config/db.config.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module.js';

@Module({
  imports: [TypeOrmModule.forRoot(postgresConfig), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
