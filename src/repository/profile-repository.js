import { pool } from "../config/db.js";

export class ProfileRepository {

    static UpdateUserProfileDB = async (main, role, level, rank, platform, updated_at, userId) => {
        try {
            const query = `UPDATE profiles SET 
                           main_character = $1,
                           role = $2,
                           level = $3,
                           rank = $4,
                           platform = $5,
                           updated_at = $6
                           WHERE user_id = $7`;
            const values = [main, role, level, rank, platform, updated_at, userId];
            await pool.query(query, values);
        } catch (error) {
            console.log('Error en actualizar usuario');
        }
    }

    static UpdateUserSocialDB = async (usertag) => {
        try {
            const query = `SELECT id, password FROM users WHERE usertag = $1`;
            const values = [usertag];
            const result = await pool.query(query, values);

            return result.rows[0];
        } catch (error) {
            console.log('Error en login usuario');
        }
    }
}