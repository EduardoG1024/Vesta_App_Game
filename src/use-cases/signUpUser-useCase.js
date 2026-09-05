import { CreateHash } from "../config/bcrypt.js";
import { UserEntity } from "../entity/signUp-Entity.js";
import { AuthRepository } from "../repository/auth-repository.js";

export class RegisterUserUseCase {

    constructor(usertag, password, confirmPassword) {
        this.usertag = usertag;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    async execute() {
        try {
            if (!this.usertag || !this.password || !this.confirmPassword)
                throw new Error('Credentials NOT found');
            if (this.usertag.length > 60)
                throw new Error('Usertag must have less than 60 digits');
            if (this.password.length < 8)
                throw new Error('Password too short');
            if (this.confirmPassword != this.password)
                throw new Error('Password are not the same');

            const hash = await CreateHash(this.password);

            const user = new UserEntity(this.usertag, hash);

            await AuthRepository.RegisterUserDB(user.usertag, user.password);
            
        } catch (error) {
            throw new Error(error.message);
        }
    }
}