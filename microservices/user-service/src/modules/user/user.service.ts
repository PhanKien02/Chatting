import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { paginateResponse } from 'src/utils/buildFilterSortAndPaginate';
import { IResponseRabbitmq } from './user.rabbitmq';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) { }
  async create(createUserDto: CreateUserDto): Promise<IResponseRabbitmq<UserEntity>> {
    const hasPhoneOrEmail = await this.usersRepository.findOne({
      where: [
        { email: createUserDto.email },
        { phone: createUserDto.phone }
      ],
    });
    if (hasPhoneOrEmail) {
      return { success: false, message: 'User already exists' }
    }

    const user = this.usersRepository.create(createUserDto);
    const newUser = await this.usersRepository.save(user);
    return { success: true, message: newUser };
  }

  async findAll(query: any) {
    const { page, limit, ...res } = query
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

  async findOne(id: number): Promise<IResponseRabbitmq<UserEntity | null>> {
    const user = await this.usersRepository.findOne({
      where: {
        id: id
      }
    })
    if (!user)
      return {
        success: false,
        message: null
      }
    return {
      message: user,
      success: true
    }
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
