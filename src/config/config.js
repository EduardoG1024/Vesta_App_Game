import 'dotenv/config';

export const envs = {
    PORT: process.env.PORT,
    SECURE: process.env.SECURE_COOKIE,
    SUPABASE_URL: process.env.SUPABASE_PUBLIC_KEY,
    SUPABASE_KEY: process.env.SUPABASE_ANON_KEY,
}