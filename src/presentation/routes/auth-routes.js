import { Router } from "express";
import { AuthControllers } from "../controllers/auth-controllers.js";
import { signInlimiter, signUplimiter } from "../../middlewares/rate-limit.js";

const auth = Router();

auth.post('/signup', signUplimiter, AuthControllers.SignUpUser);
auth.post('/signin', signInlimiter, AuthControllers.SignInUser);
auth.get('/signout', AuthControllers.SignOutUser);
auth.post('/recover', AuthControllers.RecoverUser);

export default auth;