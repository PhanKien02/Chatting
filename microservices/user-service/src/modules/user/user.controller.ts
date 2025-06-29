import { Controller } from '@nestjs/common';
import { GrpcMethod, GrpcStreamMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Query } from 'src/proto/user/Query';
@Controller('user')
export class UserController {

  constructor(
    private readonly userService: UserService,
  ) { }
  @MessagePattern('user_create')
  async create(createUserDto: CreateUserDto, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    console.log({ metadata, call });
    const user = await this.userService.create(createUserDto);
    return user;
  }

  @GrpcMethod('UserService', 'FindAll')
  async findAll(query: Query, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    const result = await this.userService.findAll(query);
    return result;
  }

  @GrpcMethod('UserService', 'FindOne')
  async findOne(data: { id: string }, metadata: Metadata, call: ServerUnaryCall<any, any>) {

    const result = await this.userService.findOne(+data.id);
    return result

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
