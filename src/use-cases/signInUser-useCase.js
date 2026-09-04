import { CompareHash } from "../config/bcrypt.js";
import { AuthRepository } from "../repository/auth-repository.js";

export class LoginUserUseCase {

    constructor(usertag, password) {
        this.usertag = usertag;
        this.password = password;
    }

    async execute(req) {
        try {
            if (!this.usertag || !this.password)
                throw new Error('Credentials NOT found');

            const hash = await AuthRepository.SignInUserDB(this.usertag);

            if (!hash)
                throw new Error('Usuario no encontrado');
            
            const compared = await CompareHash(this.password, hash.password);
            
            if (!compared)
                throw new Error('Contraseña Incorrecta');

            req.session.user = {
                id: hash.id,
                usertag: this.usertag,
            };
        } catch (error) {
            throw new Error(error.message);
        }
    }
}