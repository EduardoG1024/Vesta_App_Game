import { pool } from "../config/db.js";

export class ProfileRepository {
    static CreateProfileUserDB = async (userId, main, role, level, rank) => {
        try {
            const query = `INSERT INTO profiles(user_id, main_character, role, level, rank)
                           VALUES($1, $2, $3, $4, $5)`;
            const values = [userId, main, role, level, rank];
            await pool.query(query, values);
        } catch (error) {
            console.log('Error al crear profile');
        }
    }

    static UpdateUserDB = async (main, role, level, rank, userId) => {
        try {
            const query = `UPDATE profiles SET 
                           main_character = $1,
                           role = $2,
                           level = $3,
                           rank = $4
                           WHERE user_id = $5 RETURNING *`;
            const values = [main, role, level, rank, userId];
            await pool.query(query, values);
        } catch (error) {
            console.log('Error en actualizar usuario');
        }
    }

    static SignInUserDB = async (usertag) => {
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