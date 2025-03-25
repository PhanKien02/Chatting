import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { CustomExceptionFilter } from './configs/interceptor/custom-exception/custom-exception.interceptor';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            credentials: true,
        },
    });
    app.setGlobalPrefix('api');
    app.useGlobalFilters(new CustomExceptionFilter());
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, // Loại bỏ các trường không có trong DTO
            forbidNonWhitelisted: true, // Báo lỗi nếu có trường không hợp lệ
            transform: true, // Tự động chuyển đổi payload thành instance của DTO
        }),
    );
    const config = new DocumentBuilder()
        .setTitle('API example')
        .setDescription('The API description')
        .setVersion('1.0')
        .addTag('API')
        .addBearerAuth()
        .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/document/swagger', app, documentFactory);
    await app.listen(process.env.POST ?? 3001).then(() => {
        console.log(`Server is running on http://localhost:${process.env.POST ?? 3001}/api`);
    });
}
bootstrap();
