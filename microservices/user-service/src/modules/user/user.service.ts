import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { paginateResponse } from 'src/utils/buildFilterSortAndPaginate';
import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';

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
    console.log("aaaaa");

    if (hasPhoneOrEmail) {
      throw new BadRequestException('User already exists');
    }

    const user = this.usersRepository.create(createUserDto);
    const newUser = await this.usersRepository.save(user);
    return newUser;
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
    return this.usersRepository.findOne({
      where: {
        id: id
      }
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
