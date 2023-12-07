export const checkRole = (rolesArr) => (req, res, next) => {
    const userRoles = req.user.roles;

    if (!userRoles) {
        return res.status(401).json('Необходима авторизация')
    }

    let hasRole = false;

    rolesArr.forEach(role => {
        if (userRoles.includes(role)) {
            hasRole = true
        }
    })

    if (hasRole) {
        next()
    } else res.status(403).json('У вас не достаточно прав')
}
