import { BadRequestException, Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userService.findOne(loginDto.email);

    // test de corespondance de password et hash
    const isMatch = await compare(loginDto.password, user.password);

    if (isMatch) {
      const payload = {
        id: user._id,
        email: user.email,
        pseudo: user.pseudo,
      };

      return { token: this.jwtService.sign(payload) };
    }

    throw new BadRequestException({
      message: 'identifiant ou mot de passe incorect',
    });
  }
}
