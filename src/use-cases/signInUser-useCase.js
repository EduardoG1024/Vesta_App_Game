import { CompareHash } from "../config/bcrypt.js";
import { AuthRepository } from "../repository/auth-repository.js";

export class LoginUserUseCase {

    constructor(usertag, password) {
        this.usertag = usertag;
        this.password = password;
    }

    async execute() {
        try {
            if (!this.usertag || !this.password)
                throw new Error('Credentials NOT found');

            const hash = await AuthRepository.SignInUserDB(this.usertag);

            const compared = await CompareHash(this.password, hash);
            
            if (!compared)
                throw new Error('Contraseña Incorrecta');
        } catch (error) {
            throw new Error(error.message);
        }
    }
}