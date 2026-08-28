import { UnauthenticatedUser } from "../../middlewares/authentication.js";

export class AuthControllers {

    // SIGN UP
    static SignUpUser = async (req, res) => {
        try {
            const {usertag, password, confirmPassword} = req.body;
            if (!usertag || !password || !confirmPassword)
                throw new Error('User Credentials NOT Found');


            return res.status(200).json({
                message: 'Welcome aboard, astronaut!',
            });
        } catch (err) {
            if (err)
                return res.status(400).json({
                    message: 'Oh Moons!, Something Went Wrong',
                    error: err.message
                });
        }
        
    }

    // SIGN IN
    static SignInUser = async (req, res) => {
        return res.status(200).json({
            message: 'Login Succesful!'
        });
    }

    // SIGN OUT
    static SignOutUser = async (req, res) => {
        try {
            UnauthenticatedUser(req, res);

            return res.status(200).json({
                message: 'User has Sign Out'
            });
        } catch (error) {
            return res.status(400).json({
                message: 'Error on SignOut user'
            });
        }
    }

    // RECOVER USER
    static RecoverUser = async (req, res) => {
        return res.status(200).json({
            message: 'Function Not Valid Yet'
        });
    }

}