import { UUID } from '../config/uuid.js'


export class SignUpCreator {

    constructor(battletag, password, confirmPassword) {
        this.battletag = this.battletagValidator(battletag);
        this.password = password;
        this.confirmPassword = this.confirmPasswordValidator(password, confirmPassword);
        this.uuid = UUID();
        this.createdAt = new Date();
    }

    battletagValidator(battletag) {
        if (!battletag.includes('#')) return false;
        return battletag;
    }

    confirmPasswordValidator(password, confirmPassword) {
        if (confirmPassword !== password) return false;
        return confirmPassword;
    }

}