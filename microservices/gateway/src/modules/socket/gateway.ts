import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
        cors: {
                origin: 'http://localhost:3000',
                allowedHeaders: ['Authorization'],
                credentials: true,
                methods: ['GET', 'POST'],
        },
        transports: ['polling', 'websocket'],
        allowEIO3: true,
})
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
        @WebSocketServer() server: Server;

        @SubscribeMessage('connect')
        handleConnection(client: Socket) {
                console.log(`Client connected: ${client.id}`);
        }

        @SubscribeMessage('disconnect')
        handleDisconnect(client: Socket) {
                console.log(`Client disconnected: ${client.id}`);
        }

        @SubscribeMessage('hello')
        handleEvent(client: Socket, data: any): void {
                this.server.emit('events', data);
        }
}