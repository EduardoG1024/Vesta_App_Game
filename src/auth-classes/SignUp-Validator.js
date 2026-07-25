
export class SignUpValidator {

    constructor(signUp) {
        this.usertag = signUp.usertag;
        this.password = signUp.password;
        this.confirmPassword = signUp.confirmPassword;
        this.validation = this.validate();
    }

    validate() {
        if (this.usertag === false || this.password === false || this.confirmPassword === false)
            return false;
        return true;
    }
}