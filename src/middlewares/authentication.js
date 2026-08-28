
export const UnauthorizedUser = (req, res) => {
    if (!req.session.user)
        return res.status(403).json({
            message: 'UNAUTHORIZED USER'
        });
}

export const UnauthenticatedUser = (req, res) => {
    if (!req.session.user)
        return res.status(403).json({
            message: 'UNAUTHENTICATED USER'
        });
}