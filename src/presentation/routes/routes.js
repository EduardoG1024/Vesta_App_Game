import express, { Router } from "express";
import { VestaControllers } from "../controllers/controllers.js";

const router = Router();

router.get('/', VestaControllers.GetVesta);
router.post('/register', VestaControllers.RegisterSignUp);
router.post('/login', VestaControllers.LoginSignIn);

router.get('/profile', VestaControllers.GetProfile);

export default router;