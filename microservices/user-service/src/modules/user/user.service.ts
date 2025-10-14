import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { IQuery, paginateResponse } from 'src/utils/buildFilterSortAndPaginate';
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

  async findAll(query: IQuery<UserEntity>) {
    const { page, limit, ...res } = query
    const queryBuilder = this.usersRepository.createQueryBuilder("user").where(res).skip((page - 1) * limit || 0).take(limit || 10)
    if (query.searchKeyword) {
      const keywords = query.searchKeyword
        .trim()
        .split(/\s+/)
        .map((kw) => kw.toLowerCase())

      keywords.forEach((kw, i) => {
        queryBuilder.andWhere(
          `(
        LOWER(email) LIKE :kw${i}
        OR LOWER(fullName) LIKE :kw${i}
        OR LOWER(phone) LIKE :kw${i}
      )`,
          { [`kw${i}`]: `%${kw}%` },
        )
      })
    }
    const [datas, totalResults] = await queryBuilder.getManyAndCount();
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

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findUserByIds(ids: number[]): Promise<boolean> {
    const hasUser = await this.usersRepository.exists({ where: { id: In(ids) } })
    return hasUser;
  }

  async updateUser(id: number, data: UserEntity) {
    return this.usersRepository.update({ id }, {
      avatarUrl: data.avatarUrl,
      email: data.email,
      fullName: data.fullName,
      phone: data.fullName,
    });
  }
}
