const { catalog } = require('../controllers/catalog');
const { about } = require('../controllers/about');
const { details, attach, attachPost } = require('../controllers/details');
const { create, post: createPost } = require('../controllers/create');
const { notFound } = require('../controllers/notFound');
const { post: commentPost } = require('../controllers/comments')
const { edit, post: editPost } = require('../controllers/edit');
const { createAccessory, accessoryPost } = require('../controllers/accessory');

module.exports = (app) => {
    // setup router
    app.get('/', catalog);
    app.get('/about', about);
    app.get('/details/:id', details);
    app.get('/create', create);
    app.get('/create', create);
    app.post('/create', createPost);

    app.get('/edit/:id', edit);
    app.post('/edit/:id', editPost);

    app.post('/comments/:cubeId/create', commentPost);

    app.get('/accessory/create', createAccessory);
    app.post('/accessory/create', accessoryPost);
    app.get('/details/:id/attach', attach);
    app.post('/details/:cubeId/attach', attachPost);

    app.all('*', notFound); //404 page
}