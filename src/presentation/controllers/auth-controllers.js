import { UnauthenticatedUser } from "../../middlewares/authentication.js";
import { LoginUserUseCase } from "../../use-cases/signInUser-useCase.js";
import { SignOutUserUseCase } from "../../use-cases/signOutUser-useCase.js";
import { RegisterUserUseCase } from "../../use-cases/signUpUser-useCase.js";

export class AuthControllers {

    // SIGN UP
    static SignUpUser = async (req, res) => {
        try {
            const {usertag, password, confirmPassword} = req.body;
            
            const register = new RegisterUserUseCase(usertag, password, confirmPassword);
            const user = await register.execute();


            return res.status(200).json({
                message: 'Welcome aboard, astronaut!',
                date: user
            });
        } catch (error) {
            return res.status(400).json({
                message: 'Oh Moons!, Something Went Wrong',
                error: error.message
            });
        }
        
    }

    // SIGN IN
    static SignInUser = async (req, res) => {
        try {
            const {usertag, password} = req.body;

            const login = new LoginUserUseCase(usertag, password);
            await login.execute(req);

            return res.status(200).json({
                message: 'Login Succesful!',
                session: req.session.user
            });
        } catch (error) {
            return res.status(200).json({
                message: 'Uh-oh! We have encountered an unexpected anomaly!',
                error: error.message
            });
        }
    }

    // SIGN OUT
    static SignOutUser = async (req, res) => {
        try {
            UnauthenticatedUser(req);
            SignOutUserUseCase.execute(req, res);

            return res.status(200).json({
                message: 'User has Sign Out'
            });
        } catch (error) {
            return res.status(400).json({
                message: 'Error on SignOut user',
                error: error.message
            });
        }
    }

    // RECOVER USER
    static RecoverUser = async (req, res) => {
        try {
            const usertag = req.body.usertag;

            return res.status(200).json({
                message: 'Recover account'
            });
        } catch (error) {
            return res.status(400).json({
                message: 'Error in recover account',
                error: error.message
            });
        }
    }

}