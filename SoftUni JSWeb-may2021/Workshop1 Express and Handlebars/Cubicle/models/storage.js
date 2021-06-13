const fs = require('fs').promises;
const uniqid = require('uniqid');

let data = {};

//Model structure

/* 
    {
        "name": "string",
        "description": "string",
        "imageUrl": "string",
        "difficulty": "number"
    }
*/

async function init() {
    try {
        data = JSON.parse(await fs.readFile('./models/data.json'));
    } catch (err) {
        console.error('Error reading file from database.');
    }

    return (req, res, next) => {
        req.storage = {
            getAll,
            getById,
            create,
            edit
        };
        next();
    };
}

async function getAll() {
    return Object
        .entries(data)
        .map(([id, v]) => Object.assign({}, { id }, v))
}

async function getById(id) {
    const cube = data[id];
    if (cube) {
        return Object.assign({}, { id }, cube);
    } else {
        return undefined;
    }
}

async function create(cube) {
    const id = uniqid();
    data[id] = cube;

    await persist();
}

async function edit(id, cube) {
    if(!data[id]){
        throw new ReferenceError('No such ID in database.')
    }
    data[id] = cube;

    await persist();
}

async function persist() {
    try {
        await fs.writeFile('./models/data.json', JSON.stringify(data, null, 2));
        console.log('>>> entry created');
    } catch (err) {
        console.error('Error writing out database.');
    }
}

module.exports = {
    init,
    getAll,
    getById,
    create
};