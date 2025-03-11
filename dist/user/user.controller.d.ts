import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(body: {
        name: string;
        email: string;
    }): Promise<import("@prisma/client/runtime").GetResult<{
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
