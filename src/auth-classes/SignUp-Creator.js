//import { UUID } from '../config/uuid.js'


export class SignUpCreator {

    constructor(usertag, password, confirmPassword) {
        this.usertag = this.usertagValidator(usertag);
        this.password = password;
        this.confirmPassword = this.confirmPasswordValidator(password, confirmPassword);
        this.status = true;
        this.createdAt = new Date();
    }

    usertagValidator(usertag) {
        if (usertag.length > 50) return false;
        return usertag;
    }

    confirmPasswordValidator(password, confirmPassword) {
        if (confirmPassword !== password) return false;
        return confirmPassword;
    }

}