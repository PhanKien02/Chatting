import { Controller } from '@nestjs/common';
import { GrpcMethod, GrpcStreamMethod, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/proto/user/User';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { from, Observable } from 'rxjs';

import { UserEntity } from './entities/user.entity';
@Controller('user')
export class UserController {

  constructor(
    private readonly userService: UserService,
  ) { }
  @GrpcStreamMethod()
  create(@Payload() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @GrpcMethod('UserService', 'FindAll')
  async findAll(query: any, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<Observable<UserEntity>> {
    const users = await this.userService.findAll(query);
    return from(users);
  }

  @GrpcMethod('UserService')
  findOne(data: UserById, metadata: Metadata, call: ServerUnaryCall<any, any>): User | undefined {
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
