import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'sql12.freesqldatabase.com',
    port: 3306,
    username: 'sql12781097',
    password: 'cEHwRvdfu8',
    database: 'sql12781097',
    synchronize: true,
    autoLoadEntities: true
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
