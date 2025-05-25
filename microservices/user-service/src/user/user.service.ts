import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/proto/user/User';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private readonly items: User[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ];
  create(createUserDto: CreateUserDto) {
    this.items.push(createUserDto);
    return createUserDto;
  }

  findAll() {
    return this.items;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
