import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { UploadModule } from '../upload/upload.module';
import { UploadService } from '../upload/upload.service';

@Module({
        imports: [
                ClientsModule.register([
                        {
                                name: 'USER_PACKAGE',
                                transport: Transport.GRPC,
                                options: {
                                        package: 'user',
                                        protoPath: join(__dirname, '../../proto/user.proto'),
                                        loader: {
                                                includeDirs: [
                                                        join(__dirname, '../proto'),
                                                        join(
                                                                __dirname,
                                                                '../node_modules/google-proto-files'
                                                        ),
                                                ],
                                        },
                                        url: 'localhost:3002',
                                },
                        },
                ]),
                UploadModule
        ],
        controllers: [UserController],
        providers: [UserService, UploadService],
        exports: [UserService],
})
export class UserModule { }
