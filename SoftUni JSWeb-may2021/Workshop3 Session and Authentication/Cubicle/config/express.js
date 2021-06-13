const express = require('express');
const hbs = require('express-handlebars');

module.exports = async (app) => {
    // Handlebars setup
    app.engine('hbs', hbs({
        extname: '.hbs'
    }));
    app.set('view engine', 'hbs'); // set default file extension for templates to *.hbs

    // setup static files folder
    app.use('/static', express.static('static'));
    app.use('/js', express.static('js'));

    app.use(express.urlencoded({ extended: false })); // need for parse form from stream to data (Body Parser)
}