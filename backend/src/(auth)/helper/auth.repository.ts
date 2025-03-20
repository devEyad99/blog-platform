import { Injectable } from "@nestjs/common";
import { hashPassword } from "src/global/utils/bcrypt";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "../dto/createUSer.dto";

@Injectable()
export class AuthRepository {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}
 
  async createUser(data: CreateUserDto) {
    const hashedPassword = await hashPassword(data.password);
    return this.prismaService.user.create({
      data: {
        ...data,
        password: hashedPassword,
      }
    });
  }

   async findUserByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: {
        email
      }
    });
   }
}