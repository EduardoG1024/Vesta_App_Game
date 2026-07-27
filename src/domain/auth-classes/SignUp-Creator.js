//import { UUID } from '../config/uuid.js'


export class SignUpCreator {

    constructor(usertag, password, confirmPassword) {
        this.usertag = this.usertagValidator(usertag);
        this.password = this.passwordValidator(password);
        this.confirmPassword = this.confirmPasswordValidator(password, confirmPassword);
        this.status = true;
        this.createdAt = new Date();
    }

    usertagValidator(usertag) {
        if (usertag.length > 50) return false;
        return usertag;
    }

    passwordValidator(password) {
        if (password.length < 8 || password.length > 40) return false;
        return password;
    }

    confirmPasswordValidator(password, confirmPassword) {
        if (confirmPassword !== password) return false;
        return confirmPassword;
    }

}