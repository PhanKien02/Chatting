import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { IQuery } from '@/utils/buildFilterSortAndPaginate';
import { IUser } from '@/interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { RoleType } from './enum/role-type';
import { RolesGuard } from '@/security/guards/roles.guard';
import { Role } from '@/security/decorators/roles.decorator';
import { AuthGuard } from '@/security/guards/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get("/")
  @UseGuards(AuthGuard, RolesGuard) // Bảo vệ bằng JWT
  @Role([RoleType.ADMIN])
  async findALl(@Query() query: IQuery<IUser>) {
    const data = await this.userService.getAllUsers(query);
    return data;
  }

  @Post('/')
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }
}
