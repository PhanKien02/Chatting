import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UserSchema } from './entities/user.entity';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from '../../security/passport.jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), JwtModule.register({
        global: true,
        secret: process.env.ACCESS_TOKEN_SCRECT,
        signOptions: { expiresIn: process.env.ACCESS_TOKEN_EXPIRESIN },
    }),],
    controllers: [UserController],
    providers: [UserService, JwtService, JwtStrategy],
})
export class UserModule { }
