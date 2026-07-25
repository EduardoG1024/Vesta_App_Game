import bcrypt from 'bcrypt';

const password = 'papupro';

export class SignUpBcrypt {

    constructor(password){
        this.password = password;
        this.salt = 10;
    }

    async passhash() {
        return await bcrypt.hash(this.password, this.salt)
    }

}

