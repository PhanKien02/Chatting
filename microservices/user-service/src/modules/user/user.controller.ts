import { Controller } from '@nestjs/common';
import { GrpcMethod, GrpcStreamMethod, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Query } from 'src/proto/user/Query';
@Controller('user')
export class UserController {

  constructor(
    private readonly userService: UserService,
  ) { }

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
