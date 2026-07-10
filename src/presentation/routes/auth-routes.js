import express, { Router } from "express";
import { AuthControllers } from "../controllers/auth-controllers.js";

const authRouter = Router();

authRouter.get('/', AuthControllers.GetVesta);
authRouter.post('/register', AuthControllers.RegisterSignUp);
authRouter.post('/login', AuthControllers.LoginSignIn);

export default authRouter;