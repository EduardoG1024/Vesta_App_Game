import { UpdateEntity } from "../../entity/updateUser-entity.js";
import { ProfileRepository } from "../../repository/profile-repository.js";

export class UpdateUserUseCase {

    constructor(main, role, level, rank) {
        this.mainCharacter = main;
        this.role = role;
        this.level = Number(level);
        this.rank = rank;
    }

    async execute(req) {
        try {
            if (!req.session.user)
                throw new Error('Usuario no autenticado');

            const userId = req.session.user.id;
            
            if (!this.mainCharacter || !this.role || !this.level || !this.rank)
                throw new Error('Faltan datos por llenar');
            if (this.level < 0 || this.level > 50)
                throw new Error('Ningun personaje puede tener un nivel mayor a 50');
            if (typeof(this.level) != 'number')
                throw new Error('Level debe ser un numero');

            // const update = new UpdateEntity(userId, this.mainCharacter, this.role, this.level, this.rank);

            await ProfileRepository.UpdateUserDB(this.mainCharacter, this.role, this.level, this.rank, userId);
            return true;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}