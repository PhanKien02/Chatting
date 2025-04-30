import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { errorMessage } from '@/common/errorMessage';
import { genKeyActive } from '@/utils/gennerate-key';
import { compareSync, hashSync } from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginResponse, PayLoadToken } from '@/interfaces/user.interface';
import { IPaginated, IQuery } from '@/interfaces/paging.interface';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { paginateResponse } from '@/utils/build-result';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>, private readonly jwtService: JwtService) { }

    async create(createUserDto: CreateUserDto, userId: number) {
        const validateEmail = await this.userModel.findOne({
            $and: [
                {
                    role: createUserDto.role,
                    email: createUserDto.email
                },
                {
                    role: createUserDto.role,
                    phone: createUserDto.phone
                }
            ]
        });
        if (validateEmail) {
            throw new BadRequestException(errorMessage.PHONE_EXITS);
        }
        const newUser = await this.userModel.create({
            ...createUserDto,
            activeKey: genKeyActive(),
            isActive: false,
            password: hashSync(createUserDto.password, 10),
            created_by: userId || null,
        });
        return newUser;
    }

    async findAll(paginate: IQuery<User>): Promise<IPaginated<User>> {
        const result = await this.userModel.find();
        return paginateResponse({
            data: result,
            limit: paginate.limit,
            page: paginate.page,
            totalResults: result.length
        })
    }

    async findOneById(id: ObjectId): Promise<User> {
        const user = await this.userModel.findOne({

        });
        return user
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }

    async login(payLoad: LoginDto): Promise<LoginResponse> {
        const user = await this.validateUser(payLoad);
        const payLoadAccessToken: PayLoadToken = {
            role: user.role,
            userId: user._id,
        };
        const accessToken = this.jwtService.sign(payLoadAccessToken, {
            algorithm: 'HS256',
            secret: process.env.ACCESS_TOKEN_SCRECT,
            expiresIn: process.env.ACCESS_TOKEN_EXPIRESIN,
        });

        const now = new Date();

        const expires = new Date(now);
        const refreshToken = this.jwtService.sign(
            {
                userId: user._id,
            },
            {
                algorithm: 'HS512',
                secret: process.env.REFRESH_TOKEN_SCRECT,
                expiresIn: process.env.REFRESH_TOKEN_EXPIRESIN,
            },
        );

        return {
            user,
            accessToken,
            refreshToken,
            expires: expires.setSeconds(
                expires.getSeconds() + parseInt(process.env.ACCESS_TOKEN_EXPIRESIN),
            ),
        };
    }
    async validateUser(
        payLoad: LoginDto,
    ): Promise<Omit<User, 'password' | 'activeKey' | 'resetKey'>> {

        const user = await this.userModel.findOne({
            role: payLoad.role,
            phone: payLoad.login
        }).lean();
        if (!user) throw new BadRequestException(errorMessage.LOGIN_ERROR);

        if (!compareSync(payLoad.password, user.password)) {
            throw new BadRequestException(errorMessage.LOGIN_ERROR);
        }
        const { password, activeKey, resetKey, __v, ...rest } = user;
        return rest;
    }

    async validateToken(
        payLoad: PayLoadToken): Promise<Omit<User, 'password' | 'activeKey' | 'resetKey'>> {
        const user = await this.userModel.findOne({
            _id: payLoad.userId,
            role: payLoad.role,
        }).lean();

        if (!user) throw new BadRequestException(errorMessage.TOKEN_NOT_VALID);

        return user;
    }
}
