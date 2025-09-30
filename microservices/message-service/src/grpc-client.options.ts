import { ReflectionService } from '@grpc/reflection';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: GrpcOptions = {
    transport: Transport.GRPC,
    options: {
        package: 'message',
        protoPath: join(__dirname, './proto/message.proto'),
        loader: {
            includeDirs: [
                join(__dirname, './proto'),
                join(__dirname, '../node_modules/google-proto-files'),
            ],
        },
        onLoadPackageDefinition: (pkg, server) => {
            new ReflectionService(pkg).addToServer(server);
        },
        url: '0.0.0.0:3005',
    },
};