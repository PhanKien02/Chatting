export const redisOptions = {
        url: process.env.REDIS_URL || "", // The Redis server URL (use 'rediss' for TLS)
        password: process.env.REDIS_PASSWORD || "", // Optional password if Redis has authentication enabled

        socket: {
                host: process.env.REDIS_SOCKET_HOST || "", // Hostname of the Redis server
                port: parseInt(process.env.REDIS_SOCKET_PORT || "17027"),        // Port number
                reconnectStrategy: (retries) => Math.min(retries * 50, 2000), // Custom reconnect logic

                tls: false, // Enable TLS if you need to connect over SSL
                keepAlive: 30000, // Keep-alive timeout (in milliseconds)
        }
};