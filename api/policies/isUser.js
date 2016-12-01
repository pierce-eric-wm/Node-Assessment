module.exports = function (req, res, next) {
    if (req.headers.authorization_user === 'password') {
        next();
    } else {
        return res.forbidden('No valid Authorize header passed.');
    }
};