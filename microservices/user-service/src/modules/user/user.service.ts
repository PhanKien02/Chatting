import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { RpcException } from '@nestjs/microservices';
import { paginateResponse } from 'src/utils/buildFilterSortAndPaginate';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) { }
  async create(createUserDto: CreateUserDto) {
    const hasPhoneOrEmail = await this.usersRepository.findOne({
      where: [
        { email: createUserDto.email },
        { phone: createUserDto.phone }
      ],
    });
    if (hasPhoneOrEmail) {
      throw new RpcException("Email hoặc số điện thoại đã tồn tại")
    }
    const user = this.usersRepository.insert(createUserDto);
    return user;
  }

  async findAll(query: any) {
    const { page, limit, searchKeyword, ...res } = query
    const [datas, totalResults] = await this.usersRepository.findAndCount({
      where: res,
      skip: (page - 1) * limit || 0,
      take: limit || 10,
      order: {
        id: 'DESC'
      }
    });

    return paginateResponse({
      datas, page, limit, totalResults
    });
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
