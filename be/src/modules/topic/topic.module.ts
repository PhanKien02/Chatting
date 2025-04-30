import { Module } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicController } from './topic.controller';
import { Topic, TopicSchema } from './entities/topic.entity';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { JwtStrategy } from '@/security/passport.jwt.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';

@Module({
    imports: [MongooseModule.forFeature([{ name: Topic.name, schema: TopicSchema }]), JwtModule.register({
        global: true,
        secret: process.env.ACCESS_TOKEN_SCRECT,
        signOptions: { expiresIn: process.env.ACCESS_TOKEN_EXPIRESIN },
    }), UserModule],
    controllers: [TopicController],
    providers: [TopicService, JwtStrategy, JwtService],
})
export class TopicModule { }
