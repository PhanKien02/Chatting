import { Body, Controller, Get, Param, Put, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';
import { IQuery } from '@/utils/buildFilterSortAndPaginate';
import { IUser } from '@/interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@/security/guards/auth.guard';
import { ApiBearerAuth, ApiConsumes, } from '@nestjs/swagger';
@ApiBearerAuth()
@UseGuards(AuthGuard) // Bảo vệ bằng JWT
@Controller('user')
export class UserController {
        constructor(private readonly userService: UserService) { }

        @Get('/')
        async findALl(@Query() query: IQuery<IUser>) {
                const data = await this.userService.getAllUsers(query);
                return data;
        }

        @Put(':id')
        @ApiConsumes('multipart/form-data')
        @UseInterceptors(
                FileInterceptor('avatarUrl', { limits: { fileSize: 5 * 1024 * 1024 } }),
        )
        update(
                @Param('id') id: string,
                @UploadedFile() file: Express.Multer.File,
                @Body() user: CreateUserDto,
        ) {
                return this.userService.updateUser(id, file, user);
        }
}
