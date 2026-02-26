import 'dotenv/config';
import express from 'express';
import path from 'path';
import { createClient } from "@supabase/supabase-js";

const app = express();
// PUERTO
const port = process.env.PORT;

const __dirname = import.meta.dirname;

// CLIENTE SUPABASE
const supabase = createClient(
    process.env.SUPABASE_PUBLIC_URL,
    process.env.SUPABASE_ANON_KEY
);

// SUPABASE FUNCTIONS
async function loginwatch(userwatch, passwatch) {
    const {data, error} = await supabase.auth.signUp({
        email: userwatch,
        password: passwatch
    });
}

// USAR CARPETA PUBLICA - LECTURA DE BODY - 
app.use(express.static(path.join(__dirname, 'Frontend')));
app.use(express.urlencoded({extended: true}));

// REGISTRO DE USUARIOS
app.post('/loginwatch',  async (req, res, next) => {
    console.log(req.body);
    res.send(`Usuario: ${req.body.userwatch}, Contraseña: ${req.body.passwatch}`)
    loginwatch(req.body.userwatch, req.body.passwatch);
    next();
});

// EXPRESS ESCUCHANDO
app.listen(port, () => {
    console.log(`Mainwatch escuchando en el puerto ${port}`)
});