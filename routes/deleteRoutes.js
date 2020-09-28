const dataController = require('../data/dataController');

const fruitDeleteRequest = {
    method: 'DELETE',
    path: '/api/fruits/{id}',
    handler: (request, h) => {
        const fruitId = parseInt(request.params.id);
        const fruitsJson = dataController.getData("fruits");
        const fruit = fruitsJson.find(fruit => fruit.id === fruitId);
        if (!fruit) {
            return h.response(`Fruit with id ${fruitId} not found!`).code(404);
        } else {
            const newFruitsJson = fruitsJson.map(fruit => {
                if (fruit.id === fruitId) {
                    return null;
                } else {
                    return fruit;
                }
            }).filter(fruit => fruit !== null);
            dataController.updateData(newFruitsJson, "fruits");
            return h.response(`Fruit with id ${fruitId} is deleted!`).code(200);
        }
    }
}

const cartDeleteRequest = {
    method: 'DELETE',
    path: '/api/cart',
    handler: (request, h) => {
        const cartReset = [
            {
                "cartId": 2001,
                "username": "Krupesh",
                "productIds": [],
                "quatities": [],
                "orderDate": ""
            }
        ];
        dataController.updateData(cartReset, "cart");
        return h.response(`Cart reset done.`).code(200);
    }
}

module.exports = {
    deleteFruit: fruitDeleteRequest,
    deleteCart: cartDeleteRequest
}