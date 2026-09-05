import { pool } from "../config/db.js";

export class ProfileRepository {
    static CreateProfileUserDB = async (userId, main, role, level, rank, platform) => {
        try {
            const query = `INSERT INTO profiles(user_id, main_character, role, level, rank, platform)
                           VALUES($1, $2, $3, $4, $5, $6)`;
            const values = [userId, main, role, level, rank, platform];
            await pool.query(query, values);
        } catch (error) {
            console.log('Error al crear profile');
        }
    }

    static UpdateUserProfileDB = async (main, role, level, rank, platform, userId) => {
        try {
            const query = `UPDATE profiles SET 
                           main_character = $1,
                           role = $2,
                           level = $3,
                           rank = $4,
                           platform = $5
                           WHERE user_id = $6 RETURNING *`;
            const values = [main, role, level, rank, platform, userId];
            await pool.query(query, values);
        } catch (error) {
            console.log('Error en actualizar usuario');
        }
    }

    static CreateUserSocialDB = async (userId, main, role, level, rank, platform) => {
        try {
            const query = `INSERT INTO profiles(user_id, main_character, role, level, rank, platform)
                           VALUES($1, $2, $3, $4, $5, $6)`;
            const values = [userId, main, role, level, rank, platform];
            await pool.query(query, values);
        } catch (error) {
            console.log('Error al crear profile');
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