import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UploadModule } from './modules/upload/upload.module';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import Redis from 'ioredis';
@Module({
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => {
        const redisConfig = {
          host: process.env.REDIS_HOST,
          port: process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : undefined,
          username: process.env.REDIS_USER,
          password: process.env.REDIS_PASSWORD,
        };
        console.log({ redisConfig });

        await new Promise<void>((resolve, reject) => {
          const testClient = new Redis({
            ...redisConfig,
            lazyConnect: true,
            tls: {}, // Redis cloud như Redis Enterprise thường cần TLS
          });

          testClient.connect().then(() => {
            console.log('✅ Connected to Redis successfully!');
            testClient.disconnect();
            resolve();
          }).catch((err) => {
            console.error('❌ Redis connection failed:', err.message);
            testClient.disconnect();
            reject(err);
          });
        });
        // Trả config sau khi kết nối OK
        return {
          store: (await redisStore).redisStore,
          ...redisConfig,
          ttl: 600,
        };
      },
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    UserModule,
    AuthModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
