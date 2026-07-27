import express from "express";
import { SignUpCreator, SignUpValidator, SignUpBcrypt, SignUpFunction } from "../../domain/auth-classes/index.js";
import { SignInBcrypt } from "../../domain/login-classes/SignIn-Validator.js";

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
    static LoginSignIn = async (req, res) => {
        const {usertag, password} = req.body;
        if(!usertag || !password)
            return res.status(400).json({message: 'Oh Moons! Something Went Wrong', error: 'User Credentials NOT Found'});

        const SignIn = await SignInBcrypt(usertag, password);
        if (!SignIn) return res.status(400).json({message: 'Invalid Credentials, Try Again'});

        req.session.user = {user: usertag};

        return res.status(200).json({
            message: 'Login Succesful!',
            data: req.session.user,
        });
    }

    // RECOVER USER
    static RecoverUser = async (req, res) => {
        const {usertag, email} = req.body;
        if (!usertag || !email) return res.status(400).json({messgae: 'Not User Found'});

        return res.status(200).json({
            message: 'You Will See Your Password in Your Email in The Next 24Hr'
        });
    }

}