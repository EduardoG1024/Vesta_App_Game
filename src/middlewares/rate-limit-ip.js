import rateLimit from "express-rate-limit";

export const limiterIP = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    message: 'Has Alcanzado el Limite de Peticiones, Intenta mas Tarde',
});