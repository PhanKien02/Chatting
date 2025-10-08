import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ResponseInterceptor } from './interceptor/custom.interceptor.js';
import { AppModule } from './app.module.js';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
        const app = await NestFactory.create(AppModule, {
                cors: {
                        origin: 'http://localhost:3000',
                        methods: ['GET', 'POST', 'PUT', 'DELETE'],
                        credentials: true,
                },
        });
        app.setGlobalPrefix('api');
        app.useGlobalInterceptors(new ResponseInterceptor());
        app.useGlobalPipes(
                new ValidationPipe({
                        whitelist: true, // Loại bỏ các trường không có trong DTO
                        forbidNonWhitelisted: true, // Báo lỗi nếu có trường không hợp lệ
                        transform: true, // Tự động chuyển đổi payload thành instance của DTO
                })
        );
        app.use(cookieParser());
        // version api config
        app.enableVersioning({
                type: VersioningType.URI,
                defaultVersion: '1',
        });
        const config = new DocumentBuilder()
                .setTitle('API example')
                .setDescription('The API description')
                .setVersion('1.0')
                .addTag('API')
                .addBearerAuth()
                .build();
        const documentFactory = () => SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('/document/swagger', app, documentFactory);
        await app.listen(process.env.POST ?? 3000).then(() => {
                console.log(
                        `api gateway is running on http://localhost:${process.env.POST ?? 3001}/api`
                );
        });
}
bootstrap();
