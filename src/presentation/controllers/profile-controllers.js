import { UpdateUserUseCase } from "../../use-cases/profile-userCase/updateUser-useCase.js";

export class ProfileControllers{

    // GET ALL PROFILES
    static AllProfiles = async (req, res) => {
        try {
            return res.status(200).json({
                message: 'Explore and Connect With more Players!',
                profiles: profiles
            });
        } catch (error) {
            return res.status(400).json({
                message: 'Error'
            });
        }
    }

    // GET PROFILE
    static MyProfile = async (req, res) => {
        return res.status(200).json({
            message: 'Welcome to Your Profile!'
        });
    }

    // UPDATE PROFILE
    static UpdateProfile = async (req, res) => {
        try {
            const {main, role, level, rank, others} = req.body;

            const update = new UpdateUserUseCase(main, role, level, rank, others);
            await update.execute(req);

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