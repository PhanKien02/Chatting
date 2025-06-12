import { Body, Controller } from '@nestjs/common';
import { GrpcMethod, GrpcStreamMethod, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/proto/user/User';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { from, Observable, Subject } from 'rxjs';

import { UserEntity } from './entities/user.entity';
import { Query } from 'src/proto/user/Query';
@Controller('user')
export class UserController {

  constructor(
    private readonly userService: UserService,
  ) { }
  @GrpcMethod('UserService', 'Create')
  async create(createUserDto: CreateUserDto, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    const user = await this.userService.create(createUserDto);
    return { user };
  }

  @GrpcMethod('UserService', 'FindAll')
  async findAll(query: Query, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    const result = await this.userService.findAll(query);
    return result;
  }

  @GrpcMethod('UserService')
  findOne(id: number): User | undefined {
    return undefined;
  }
  @GrpcStreamMethod()
  update(@Payload() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto.id, updateUserDto);
  }

  @GrpcStreamMethod()
  remove(@Payload() id: number) {
    return this.userService.remove(id);
  }
}
