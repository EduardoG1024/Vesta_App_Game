import express from "express";

export class ProfileControllers{

    constructor() {}

    static AllProfiles = (req, res) => {
        return res.status(200).json({
            message: 'Explore and Connect With more Players!'
        });
    }

    static MyProfile = (req, res) => {
        return res.status(200).json({
            message: 'Welcome to Your Profile!'
        });
    }

    static UpdateProfile = (req, res) => {
        return res.status(200).json({
            message: 'Profile Updated'
        });
    }

    static DeleteProfile = (req, res) => {
        return res.status(200).json({
            message: 'Profile Disabled'
        });
    }
}