import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {

  constructor(
    private prisma: PrismaService
  ) { }

  async signupLocal(data: AuthDto) {


    // const user = await this.prisma.users.create({
    //   data: {
    //     name: data.name,
    //     lastName: data.lastName,
    //     email: data.email,
    //     password: data.password,
    //     phoneNumber: data.phoneNumber,
    //     document: data.document,
    //     country: data.country,
    //     region: data.region,
    //     city: data.city,
    //     neighborhood: data.neighborhood,
    //     address: data.address,
    //     addressZipCode: data.addressZipCode,
    //     addressHome: data.addressHome,
    //   }
    // });

    // console.log(user);

  }

  loginLocal() {

  }

  logout() {

  }

  refreshTokens() {

  }

}
