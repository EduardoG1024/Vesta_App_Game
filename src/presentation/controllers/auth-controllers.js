import { UnauthenticatedUser } from "../../middlewares/authentication.js";
import { LoginUserUseCase } from "../../use-cases/signInUser-useCase.js";
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
            const see = await login.execute();

            console.log(see);
            return res.status(200).json({
                message: 'Login Succesful!'
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