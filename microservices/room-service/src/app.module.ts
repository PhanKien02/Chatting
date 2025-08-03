import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './modules/project/project.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3308,
    username: 'root',
    password: 'admin',
    database: 'taleNet',
    synchronize: true,
    autoLoadEntities: true
  }), UserModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
