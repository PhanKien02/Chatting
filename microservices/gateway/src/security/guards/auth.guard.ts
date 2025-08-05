import { buildRedisKey, REDIS_KEY } from '@/common/redis-key';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import {
        ExecutionContext,
        Inject,
        Injectable,
        UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard as NestAuthGuard } from '@nestjs/passport';
import { Cache } from 'cache-manager';

@Injectable()
export class AuthGuard extends NestAuthGuard('jwt') {
        constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {
                super();
        }

        async canActivate(context: ExecutionContext): Promise<any> {
                const request = context.switchToHttp().getRequest();
                const token = this.extractTokenFromHeader(request);
                if (!token) {
                        throw new UnauthorizedException();
                }
                try {
                        const hasToken = await this.cacheManager.get(
                                buildRedisKey(REDIS_KEY.TOKEN.ACCESS, token)
                        );
                        if (!hasToken) throw new UnauthorizedException();
                        return super.canActivate(context);
                } catch {
                        throw new UnauthorizedException();
                }
        }
        private extractTokenFromHeader(request: any): string | undefined {
                const authHeader = request.headers['authorization'];
                const [type, token] = authHeader?.split(' ') ?? [];
                return type === 'Bearer' ? token : undefined;
        }
}
