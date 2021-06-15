const { post: commentPost } = require('../controllers/comments')

const productController = require('../controllers/productController');
const accessoryController = require('../controllers/accessoryController');
const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');

module.exports = (app) => {
    // setup router
    app.get('/', (req, res) => {res.redirect('/products')});

    app.use('/products', productController);
    app.use('/accessory', accessoryController);
    app.use('/auth', authController);

    app.post('/comments/:cubeId/create', commentPost);

    app.use('/', homeController) //implemented 404 page
}