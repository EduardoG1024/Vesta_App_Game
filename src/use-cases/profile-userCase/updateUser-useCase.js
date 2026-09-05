import { UpdateEntity } from "../../entity/updateUser-entity.js";
import { ValidateCharactersRolesPlatform } from "../../middlewares/characters-roles.js";
import { ProfileRepository } from "../../repository/profile-repository.js";

export class UpdateUserUseCase {

    constructor(main, role, level, rank, platform) {
        this.main = main;
        this.role = role;
        this.level = Number(level);
        this.rank = rank;
        this.platform = platform;
        this.updated_at = new Date();
    }

    async execute(req) {
        try {
            if (!req.session.user)
                throw new Error('Usuario no autenticado');

            const userId = req.session.user.id;
            
            if (!this.main || !this.role || !this.level || !this.rank || !this.platform || !this.updated_at)
                throw new Error('Faltan datos por llenar');
            ValidateCharactersRolesPlatform.ValidateCharcter(this.main, this.role);
            if (typeof(this.level) != 'number')
                throw new Error('Level debe ser un numero');
            if (this.level < 0 || this.level > 1000)
                throw new Error('Ninguna cuenta puede tener mas de 1000 niveles');
            ValidateCharactersRolesPlatform.ValidateRole(this.role);
            ValidateCharactersRolesPlatform.ValidateRank(this.rank);
            ValidateCharactersRolesPlatform.ValidatePlatform(this.platform);

            await ProfileRepository.UpdateUserProfileDB(this.main, this.role, this.level, this.rank, this.platform, this.updated_at, userId);
            return true;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}