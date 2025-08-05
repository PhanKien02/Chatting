import { Controller } from '@nestjs/common';
import { GrpcMethod, GrpcStreamMethod, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { Query } from 'src/proto/user/Query';
@Controller('user')
export class UserController {

  constructor(
    private readonly userService: UserService,
  ) { }

  @GrpcMethod('UserService', 'FindAll')
  async findAll(query: Query) {
    const result = await this.userService.findAll(query);
    return result;
  }

  @GrpcMethod('UserService', 'FindOne')
  async findOne(data: { id: string }) {

    const result = await this.userService.findOne(+data.id);
    return result

  }
  // @GrpcStreamMethod()
  // update(@Payload() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(updateUserDto.id, updateUserDto);
  // }

  @GrpcStreamMethod()
  remove(@Payload() id: number) {
    return this.userService.remove(id);
  }
}
