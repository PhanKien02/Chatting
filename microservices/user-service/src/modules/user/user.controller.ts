import { Controller } from '@nestjs/common';
import { GrpcMethod, GrpcStreamMethod, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { Query } from 'src/proto/user/Query';
import { UserEntity } from './entities/user.entity';

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

  @GrpcStreamMethod()
  remove(@Payload() id: number) {
    return this.userService.remove(id);
  }

  @GrpcMethod('UserService', 'FindUserByIds')
  async findUserByIds(data: { ids: string[] }) {
    const result = await this.userService.findUserByIds(data.ids.map(e => parseInt(e)));
    return { success: result }

  }
  @GrpcMethod('UserService', 'Update')
  async updateUser(data: { id: string, user: UserEntity }) {
    const result = await this.userService.updateUser(+data.id, data.user);
    return { success: result }

  }
}
