
export class SignUpValidator {

    constructor(signUp) {
        this.battletag = signUp.battletag;
        this.password = signUp.password;
        this.confirmPassword = signUp.confirmPassword;
        this.validation = this.validate();
    }

    validate() {
        if (this.battletag === false || this.password === false || this.confirmPassword === false)
            return false;
        return true;
    }
}