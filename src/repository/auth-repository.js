import { pool } from "../config/db.js";

export class AuthRepository {
    static RegisterUserDB = async (usertag, password) => {
        try {
            const query = `INSERT INTO users(usertag, password)
                           VALUES($1, $2) RETURNING *`;
            const values = [usertag, password];
            const result = await pool.query(query, values);

            return result.rows;
        } catch (error) {
            console.log('Error en registrar usuario');
        }
    }

    static SignInUserDB = async (usertag) => {
        try {
            const query = `SELECT password FROM users WHERE usertag = $1`;
            const values = [usertag];
            const result = await pool.query(query, values);

            return result.rows[0].password;
        } catch (error) {
            console.log('Error en login usuario');
        }
    }
}