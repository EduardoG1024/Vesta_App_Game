import rateLimit from "express-rate-limit";

export const signUplimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    ipv6Subnet: 56,
    message: 'Has Alcanzado el Limite de Peticiones, Intenta mas Tarde',
    // keyGenerator: (req, res) => {
        
    // }
});

export const signInlimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 8,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    ipv6Subnet: 56,
    message: 'Has Alcanzado el Limite de Intentos',
});