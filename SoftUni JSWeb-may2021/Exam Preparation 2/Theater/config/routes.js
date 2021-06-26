const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const playsController = require('../controllers/playsController');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/plays', playsController);
}