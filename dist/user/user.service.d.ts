import { PrismaService } from '../prisma/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createUser(name: string, email: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        name: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    getUsers(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        name: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
}
