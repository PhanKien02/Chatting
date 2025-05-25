import { Controller } from '@nestjs/common';
import { GrpcMethod, GrpcStreamMethod, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/proto/user/User';
import { UserById } from 'src/proto/user/UserById';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { from } from 'rxjs';

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
  findAll() {
    const users = this.userService.findAll();
    return from(users);
  }

  @GrpcMethod('UserService')
  findOne(data: UserById, metadata: Metadata, call: ServerUnaryCall<any, any>): User | undefined {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
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
