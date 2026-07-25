import express from "express";
import { SignUpCreator, SignUpValidator, SignUpBcrypt, SignUpFunction } from "../../auth-classes/index.js";

export class AuthControllers {

    constructor() {}

    static GetVesta = (req, res) => {
        return res.status(200).json({message: 'Welcome to VESTA'});
    }

    // REGISTER USER
    static RegisterSignUp = async (req, res) => {
        const {usertag, password, confirmPassword} = req.body;
        if (!usertag || !password || !confirmPassword)
            return res.status(400).json({message: 'Oh Moons! Something Went Wrong', error: 'User Credentials NOT Found'});

        
        const signUp = new SignUpCreator(usertag, password, confirmPassword);
        const validation = new SignUpValidator(signUp);
        if (validation.validation !== true) return res.status(400).json(
            {
                message: 'Invalid Credentials',
                hint: 'Verify Your UserTag or Your Password',
            });
        

        const hash = await new SignUpBcrypt(password).passhash();
        const supaResult = await SignUpFunction(signUp.usertag, hash, signUp.status);
        if (supaResult === false) return res.status(400).json({message: 'Usertag Already Exists, Try Again'});

        return res.status(200).json({
            message: 'Valid Credentials',
            info: `Hello ${signUp.usertag}, Your Account has Been Created!`,
        });
    }

    // LOGIN USER
    static LoginSignIn = (req, res) => {
        return res.status(200).json({message: 'Login'});
    }

}