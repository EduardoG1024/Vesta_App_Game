import 'dotenv/config';

export const envs = {
    PORT: process.env.PORT,
    SECURE: process.env.SECURE_COOKIE,
    POSTGRES_NAME: process.env.POSTGRES_NAME,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_PORT: process.env.POSTGRES_PORT,
    POSTGRES_HOST:process.env.POSTGRES_HOST,
    POSTGRES_DB: process.env.POSTGRES_DB
};