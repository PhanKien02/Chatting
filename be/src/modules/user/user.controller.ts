import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IResponse } from '@/interfaces/response.interface';
import { Role } from '../../security';
import { RoleType } from './entities/role-type';
import { AuthGuard } from '../../security/guards/auth.guard';
import { RolesGuard } from '../../security/guards/roles.guard';
import { LoginDto } from './dto/login.dto';
import { LoginResponse } from '@/interfaces/user.interface';
import { ApiBearerAuth } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@ApiBearerAuth()
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    private readonly logger = new Logger(UserService.name, {
        timestamp: true,
    });
    @Post()
    async create(@Body() createUserDto: CreateUserDto,
        @Req() req: Request,): Promise<IResponse<User>> {
        const data = await this.userService.create(createUserDto, req['userId']);
        this.logger.log(`Create new User Success ${createUserDto.email}`);
        return {
            data,
            message: 'Tạo tài khoản thành công',
        }
    }
    @UseGuards(AuthGuard, RolesGuard) // Bảo vệ bằng JWT
    @Role([RoleType.USER])
    @Get()
    async findAll() {
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(+id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(+id);
    }

    @Post('/login')
    async login(@Body() login: LoginDto): Promise<IResponse<LoginResponse>> {
        const data = await this.userService.login(login);
        this.logger.log(`user ${data.user.email} login success`)
        return {
            data,
            message: "Login success"
        }
    }
}
