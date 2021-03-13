import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/modules/backoffice/services/account.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { User } from 'src/modules/backoffice/models/user.model';

@Injectable()
export class AuthService {
    constructor(
        private readonly accountService: AccountService,
        private readonly jwtService: JwtService,
    ) { }

    async createToken(document, email, roles: string[]) {
        const user: JwtPayload = {
            document: document,
            email: email,
            roles: roles
        };
        return this.jwtService.sign(user)
        /*
        const accessToken = this.jwtService.sign(user);
        return {
            expiredIn: 3600,
            accessToken,
        }
        */
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        // return await this.accountService.findOneByUserName(payload.document);
        return payload;
    }
}