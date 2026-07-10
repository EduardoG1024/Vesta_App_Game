import express from "express";
import { SignUpCreator } from "../../classes/SignUp-Creator.js";
import { SignUpValidator } from "../../classes/SignUp-Validator.js";
import { supabase } from "../../config/supabase-config.js";

const users = [];

export class AuthControllers {

    constructor() {}

    static GetVesta = (req, res) => {
        return res.status(200).json({message: 'Welcome to VESTA'});
    }

    static RegisterSignUp = async (req, res) => {
        const {battletag, password, confirmPassword} = req.body;
        if (!battletag || !password || !confirmPassword)
            return res.status(400).json({message: 'Something Went Wrong', error: 'User Credentials NOT Found'});

        
        const signUp = new SignUpCreator(battletag, password, confirmPassword);
        const validation = new SignUpValidator(signUp);
        if (validation.validation !== true) return res.status(400).json({message: 'Invalid Credentials'});

        console.log(signUp);
        return res.status(200).json({
            message: 'Valid Credentials and Completed Register',
            info: signUp,
        });
    }

    static LoginSignIn = (req, res) => {
        return res.status(200).json({message: 'Login'});
    }

}