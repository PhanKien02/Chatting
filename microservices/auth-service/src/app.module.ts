import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: "auth-db",
    port: 3306,
    username: "auth_user",
    password: "auth_pass",
    database: "auth_db",
    synchronize: true,
    autoLoadEntities: true
  }), AuthModule, ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
