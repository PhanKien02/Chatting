import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { IQuery } from '@/utils/buildFilterSortAndPaginate';
import { IUser } from '@/interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get("/")
  async findALl(@Query() query: IQuery<IUser>) {
    const data = await this.userService.getAllUsers(query);
    return data;
  }

  @Post('/')
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }
}
