import { JwtService } from '@nestjs/jwt';
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
        constructor(private readonly jwtService: JwtService) { }
        @WebSocketServer() server: Server;
        afterInit(server: Server) {
                server.use(async (socket, next) => {
                        const authHeader = socket.handshake.auth?.Authorization;
                        if (!authHeader) {
                                return next(new Error("no token provided"));
                        }

                        try {
                                const token = authHeader.replace("Bearer ", "");

                                const payload = await this.jwtService.verifyAsync(token, { secret: process.env.ACCESS_TOKEN_SCRECT });
                                (socket as any).user = payload["userId"]; // attach user vào socket
                                next();
                        } catch (err) {
                                return next(new Error(err)); // hoặc "invalid token"
                        }
                });
        }
        @SubscribeMessage('connect')
        handleConnection(client: Socket) {
                console.log(`Client connected: ${client.id}`);
        }

        @SubscribeMessage('disconnect')
        handleDisconnect(client: Socket) {
                console.log(`Client disconnected: ${client.id}`);
        }

}