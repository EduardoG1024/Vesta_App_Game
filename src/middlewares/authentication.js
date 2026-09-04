
export const UnauthorizedUser = (req) => {
    if (!req.session.user)
        throw new Error('UNAUTHORIZED USER');
}

export const UnauthenticatedUser = (req) => {
    if (!req.session.user)
        throw new Error('UNAUTHENTICATED USER');
}