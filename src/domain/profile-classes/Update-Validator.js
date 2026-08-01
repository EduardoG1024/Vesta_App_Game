
export class UpdateCreatorValidator {

    constructor(main, role, level, range, others) {
        this.main = main;
        this.role = role;
        this.level = level;
        this.range = range;
        this.others = others;
        this.date = new Date();
    }

    UpdateValidator() {
        
        if (isNaN(+this.level))
            throw new Error('Level Must be a Number');
        if (this.level < 0 || this.level > 50)
            throw new Error('Level Must be a Value between 0 and 50');
        if (this.others.length > 50)
            throw new Error('You Can Only Select Less Than 3 Characters');
        return true;
    }
}