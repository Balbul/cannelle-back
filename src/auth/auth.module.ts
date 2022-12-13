import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import configuration from 'src/config/configuration';

@Module({
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: configuration().jwtSecret,
    }),
  ],
})
export class AuthModule {}
