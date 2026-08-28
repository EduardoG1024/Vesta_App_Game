import { Pool } from "pg";
import { envs } from "./config.js";

export const pool = new Pool({
    host: envs.POSTGRES_HOST,
    user: envs.POSTGRES_USER,
    port: envs.POSTGRES_PORT,
    database: envs.POSTGRES_DB,
    password: envs.POSTGRES_PASSWORD
});