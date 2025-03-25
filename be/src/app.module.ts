import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TransformResponseInterceptor } from './configs/interceptor/custom-response/custom-response.interceptor';
import { TopicModule } from './modules/topic/topic.module';
import { BookModule } from './modules/book/book.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        UserModule,
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        MongooseModule.forRoot(process.env.MONGO_URL),
        TopicModule,
        BookModule,
    ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_INTERCEPTOR,
            useClass: TransformResponseInterceptor,
        },
    ],
})
export class AppModule { }
