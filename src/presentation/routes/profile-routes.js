import express, { Router } from "express";
import { ProfileControllers } from "../controllers/profile-controllers.js";

const profileRouter = Router();

profileRouter.get('/profile', ProfileControllers.MyProfile);
profileRouter.post('/update', ProfileControllers.UpdateProfile);
profileRouter.post('/delete', ProfileControllers.DeleteProfile);

export default profileRouter;