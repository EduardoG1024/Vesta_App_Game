import express from "express";
import { GetAllUsers } from "../../domain/profile-classes/GetAllUsers.js";
import { UpdateCreatorValidator } from "../../domain/profile-classes/Update-Validator.js";

export class ProfileControllers{

    constructor() {}

    // GET ALL PROFILES
    static AllProfiles = async (req, res) => {
        const profiles = await GetAllUsers();
        return res.status(200).json({
            message: 'Explore and Connect With more Players!',
            profiles: profiles
        });
    }

    // GET PROFILE
    static MyProfile = async (req, res) => {
        return res.status(200).json({
            message: 'Welcome to Your Profile!'
        });
    }

    // UPDATE PROFILE
    static UpdateProfile = async (req, res) => {
        const {main, role, level, range, others} = req.body;
        if (!main || !role || !level || !range || !others) 
            return res.status(400).json({message: 'You Must Fill All Inputs'});

        try {

            const update = await new UpdateCreatorValidator(main, role, level, range, others);
            await update.UpdateValidator();

            return res.status(200).json({
                message: 'Profile Updated!',
                profile: update,
            });
            
        } catch (err) {
            if (err)  
                return res.status(400).json({
                message: 'Oh Moons, Something Went Wrong, Please Try Again',
                error: err.message
            });
        }
    }

    // DELETE PROFILE
    static DeleteProfile = async (req, res) => {
        const {status} = req.body;

        return res.status(200).json({
            message: 'Profile Disabled'
        });
    }
}