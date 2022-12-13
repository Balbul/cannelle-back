import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcrypt';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  /**
   * methode de création d'un utilisateur
   *
   * non active pour ne pas permettre la création d'utilisateur
   * sur ma base...
   */
  async createUser(createUserDto: CreateUserDto): Promise<User | string> {
    const salt = 10;
    const password = createUserDto.password;
    const hashPwd = await hash(password, salt);

    const newUser = new this.userModel({
      email: createUserDto.email,
      password: hashPwd,
      pseudo: createUserDto.pseudo,
    });

    try {
      return await newUser.save();
    } catch (err) {
      return "echec de la création de l'utilisateur";
    }
  }

  async findOne(email: string): Promise<User> {
    try {
      const user = await this.userModel
        .findOne({ email: email }, 'id email password pseudo')
        .exec();
      return user;
    } catch (e) {
      console.log(e);
    }
  }
}
