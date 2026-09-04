
export class SignOutUserUseCase {
    static execute(req, res) {
        req.session.destroy();
        res.clearCookie('connect.sid');
    }
}