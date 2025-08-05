import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UploadModule } from './modules/upload/upload.module';
import { CacheModule } from '@nestjs/cache-manager';
import { createKeyv } from '@keyv/redis';
@Module({
        imports: [
                ConfigModule.forRoot({
                        envFilePath: '.env',
                        isGlobal: true,
                }),
                CacheModule.register({
                        isGlobal: true,
                        stores: [createKeyv(process.env.REDIS_URL)],
                }),
                UserModule,
                AuthModule,
                UploadModule,
        ],
        controllers: [AppController],
        providers: [AppService],
})
export class AppModule {}
