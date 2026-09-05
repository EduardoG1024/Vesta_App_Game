import { UpdateEntity } from "../../entity/updateUser-entity.js";
import { ProfileRepository } from "../../repository/profile-repository.js";

const platforms = ['PC', 'Xbox', 'Playstation'];

export class UpdateUserUseCase {

    constructor(main, role, level, rank, platform) {
        this.mainCharacter = main;
        this.role = role;
        this.level = Number(level);
        this.rank = rank;
        this.platform = platform;
    }

    async execute(req) {
        try {
            if (!req.session.user)
                throw new Error('Usuario no autenticado');

            const userId = req.session.user.id;
            
            if (!this.mainCharacter || !this.role || !this.level || !this.rank)
                throw new Error('Faltan datos por llenar');
            if (typeof(this.level) != 'number')
                throw new Error('Level debe ser un numero');
            if (this.level < 0 || this.level > 1000)
                throw new Error('Ninguna cuenta puede tener mas de 1000 niveles');
            if (!platforms.includes(this.platform))
                throw new Error('Plataforma no permitida');

            // const update = new UpdateEntity(userId, this.mainCharacter, this.role, this.level, this.rank);

            await ProfileRepository.UpdateUserDB(this.mainCharacter, this.role, this.level, this.rank, userId);
            return true;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}