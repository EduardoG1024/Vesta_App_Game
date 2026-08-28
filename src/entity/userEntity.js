
export class UserEntity {
    constructor(usertag, hash) {
        this.usertag = usertag;
        this.password = hash;
    }
}