import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { ClientProxy, ClientProxyFactory, RpcException, Transport } from '@nestjs/microservices';
import { paginateResponse } from 'src/utils/buildFilterSortAndPaginate';

@Injectable()
export class UserService {
  private client: ClientProxy;
  onModuleInit() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'user-queue',
        queueOptions: { durable: true },
      },
    });
  }
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

    const user = this.usersRepository.create(createUserDto);
    const newUser = await this.usersRepository.save(user);
    this.client.emit('user-created', newUser);

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
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
