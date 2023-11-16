import { IUser } from './IUser';

export class UserSessionDto {
    id: number;
    nome: string;
    email: string;

    constructor(user: IUser) {
        this.id = user.id
        this.nome = user.nome
        this.email = user.email

    }
}