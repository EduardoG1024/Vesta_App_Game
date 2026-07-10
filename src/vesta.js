import express from 'express';
import session from 'express-session';
import path from 'path';

import { envs } from './config/config.js';
import authRouter from './presentation/routes/auth-routes.js';

const app = express();
const __dirname = import.meta.dirname;

app.use(express.json());
app.use(express.urlencoded ({extended: true}));

app.use(session({
    secret: envs.SECURE,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
    }
}));

app.use('/auth', authRouter);


app.listen(envs.PORT, () => {
    console.log(`VESTA escuchando en el puerto ${envs.PORT}`);
});