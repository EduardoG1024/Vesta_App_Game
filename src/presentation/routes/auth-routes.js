import { Router } from "express";
import { AuthControllers } from "../controllers/auth-controllers.js";

const auth = Router();

auth.post('/signup', AuthControllers.SignUpUser);
auth.post('/signin', AuthControllers.SignInUser);
auth.get('/signout', AuthControllers.SignOutUser);
auth.post('/recover', AuthControllers.RecoverUser);

export default auth;