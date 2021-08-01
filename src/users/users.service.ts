import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Interface } from 'readline';

interface IUserRequest {
  email: string,
  name: string,
  password: string
}

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private photoRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User[]> {
    await return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
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
