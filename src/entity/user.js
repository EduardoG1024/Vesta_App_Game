
export class UserEntity {
    constructor(usertag, password, confirmPassword) {
        this.usertag = usertag;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.status = true;
    }
}