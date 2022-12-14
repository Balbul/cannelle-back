import { Body, Controller, Post } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post()
  // async createUser(
  //   @Body() createUserDto: CreateUserDto,
  // ): Promise<User | string> {
  //   return await this.userService.createUser(createUserDto);
  // }
}
