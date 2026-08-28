import 'dotenv/config';

export const envs = {
    PORT: process.env.PORT,
    SECURE: process.env.SECURE_COOKIE,
    DB_NAME: process.env.POSTGRES_NAME,
    DB_USER: process.env.POSTGRES_USER,
    DB_PASSWORD: process.env.POSTGRES_PASSWORD,
    DB_PORT: process.env.POSTGRES_PORT,
    DB_HOST:process.env.POSTGRES_HOST
};