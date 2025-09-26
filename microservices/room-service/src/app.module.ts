import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RoomModule } from './room/room.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL || 'mongodb://admin:admin@localhost:27019/'),
    RoomModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
