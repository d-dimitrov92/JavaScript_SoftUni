const playsService = require("../services/plays");

module.exports = () => (req, res, next) => {
    req.storage = {
        ...playsService
    };

    next();
}