const express = require('express');
const hbs = require('express-handlebars');

const { init: storage } = require('./models/storage');

const { catalog } = require('./controllers/catalog');
const { about } = require('./controllers/about');
const { details } = require('./controllers/details');
const { create, post: createPost } = require('./controllers/create');
const { notFound } = require('./controllers/notFound');
const { edit, post: editPost } = require('./controllers/edit');

start();

async function start() {
    const port = 3000;
    const app = express();

    // Handlebars setup
    app.engine('hbs', hbs({
        extname: '.hbs'
    }));
    app.set('view engine', 'hbs'); // set default file extension for templates to *.hbs

    // setup static files folder
    app.use('/static', express.static('static'));

    app.use(express.urlencoded({ extended: false })); // need for parse form from stream to data (Body Parser)

    app.use(await storage()); // decorating context (using middleware) for using database

    // setup router
    app.get('/', catalog);
    app.get('/about', about);
    app.get('/details/:id', details);
    app.get('/create', create);
    app.get('/create', create);
    app.post('/create', createPost);

    app.get('/edit/:id', edit);
    app.post('/edit/:id', editPost);

    app.all('*', notFound); //404 page

    app.listen(port, () => console.log(`Server listening on ${port}`)); // stars server
}