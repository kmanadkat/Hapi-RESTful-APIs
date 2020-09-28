const dataController = require('../data/dataController');

const homeGetRoute = {
    method: 'GET',
    path: '/api',
    handler: (request, h) => {
        return 'Welcome to the Fruit Cart REST API';
    }
}

const allDataGetRoute = {
    method: 'GET',
    path: '/api/{filename}',
    handler: (request, h) => {
        const jsonData = dataController.getData(request.params.filename);
        if (jsonData === null) {
            return h.response("Incorrect file request!").code(404);
        }
        return jsonData;
    }
}

const fruitGetRoute = {
    method: 'GET',
    path: '/api/fruits/{id}',
    handler: (request, h) => {
        const fruitId = parseInt(request.params.id);
        const fruitsJson = dataController.getData("fruits");
        const fruit = fruitsJson.find(fruit => fruit.id === fruitId);
        if (!fruit) {
            return h.response("Incorrect fruit id!").code(404);
        }
        return fruit;
    }
}


module.exports = {
    home: homeGetRoute,
    allData: allDataGetRoute,
    fruitData: fruitGetRoute
}