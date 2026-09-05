import { pool } from "../config/db.js";

export class AuthRepository {
    static RegisterUserDB = async (usertag, password) => {
        const client = await pool.connect();
        try {

            await client.query('BEGIN');

            const query = `INSERT INTO users(usertag, password)
                           VALUES($1, $2) RETURNING *`;
            const values = [usertag, password];
            const result = await client.query(query, values);


            const profiles = `INSERT INTO profiles(user_id, updated_at) VALUES($1, $2)`;
            const profilesValues = [result.rows[0].id, new Date()];
            await client.query(profiles, profilesValues);

            await client.query('COMMIT');

        } catch (error) {
            await client.query('ROLLBACK');
            console.log('Error en registrar usuario');
            console.log(error);
        } finally {
            client.release()
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

    static SignUpUserCreateProfileDB = async (userId) => {
        try {
            const query = `INSERT INTO profiles(user_id)
                           VALUES($1)`;
            const values = [userId];
            await pool.query(query, values);

        } catch (error) {
            console.log('Error en SignUp de Profiles');
        }
    }
}