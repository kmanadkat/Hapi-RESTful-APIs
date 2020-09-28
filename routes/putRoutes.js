const dataController = require('../data/dataController');

const fruitPutRequest = {
    method: 'PUT',
    path: '/api/fruits',
    handler: (request, h) => {
        const fruitId = parseInt(request.payload.id);
        const fruitsJson = dataController.getData("fruits");
        const fruit = fruitsJson.find(fruit => fruit.id === fruitId);
        if (!fruit) {
            return h.response(`Fruit with id ${fruitId} not found!`).code(404);
        } else {
            const newFruitsJson = fruitsJson.map(fruit => {
                if (fruit.id === fruitId) {
                    return request.payload;
                } else {
                    return fruit;
                }
            });
            dataController.updateData(newFruitsJson, "fruits");
            return h.response(`Fruit with id ${fruitId} is updated.`).code(201);
        }
    }
}

const cartPutRequest = {
    method: 'PUT',
    path: '/api/cart',
    handler: (request, h) => {
        if (request.payload) {
            dataController.updateData(request.payload, "cart");
            return h.response(`Cart updated successfully.`).code(200);
        } else {
            return h.response(`Cart cannot be empty`).code(400);
        }
    }
}

module.exports = {
    updateFruit: fruitPutRequest,
    updateCart: cartPutRequest
}