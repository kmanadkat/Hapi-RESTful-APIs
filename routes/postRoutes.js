const dataController = require('../data/dataController');

const fruitPostRoute = {
    method: 'POST',
    path: '/api/fruits',
    handler: (request, h) => {
        const fruitId = parseInt(request.payload.id);
        const fruitsJson = dataController.getData("fruits");
        const fruit = fruitsJson.find(fruit => fruit.id === fruitId);
        if (fruit) {
            return h.response("Fruit with this id already exists!").code(400);
        } else {
            const newFruit = request.payload;
            fruitsJson.push(newFruit);
            dataController.updateData(fruitsJson, "fruits");
            return h.response(`New fruit with id ${fruitId} added.`).code(201);
        }
    }
}

module.exports = {
    addFruit: fruitPostRoute
}