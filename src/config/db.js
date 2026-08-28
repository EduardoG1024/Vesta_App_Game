import { Pool } from "pg";
import { envs } from "./config.js";

export const pool = new Pool({
    host: envs.DB_HOST,
    password: envs.DB_PASSWORD,
    user: envs.DB_USER,
    port: envs.DB_PORT,
    database: envs.DB_NAME
});