import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(name: string, email: string) {
    return this.prisma.user.create({
      data: { name, email, password: 'defaultPassword' },
    });
  }

  async getUsers() {
    return this.prisma.user.findMany();
  }
}
