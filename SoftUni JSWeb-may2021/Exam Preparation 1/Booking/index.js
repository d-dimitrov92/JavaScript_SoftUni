const express = require('express');

const { PORT } = require('./config');
const databaseConfig = require('./config/database');
const expressConig = require('./config/express');
const routesConfig = require('./config/routes');


start();

async function start() {
    const app = express();

    await databaseConfig(app);
    expressConig(app);
    routesConfig(app);

    app.listen(PORT, () => {
        console.log(`Application started at http://localhost:${PORT}`)
    });
}