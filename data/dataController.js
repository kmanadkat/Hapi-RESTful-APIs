const fs = require('fs');
const path = require('path');

const fruitsJsonPath = path.join(__dirname, './fruits.json');
const cartJsonPath = path.join(__dirname, './cart.json');

const paths = [fruitsJsonPath, cartJsonPath];

function getJson(fileName) {
    if (fileName === "fruits") {
        const data = fs.readFileSync(paths[0]);
        return JSON.parse(data);
    } else if (fileName === "cart") {
        const data = fs.readFileSync(paths[1]);
        return JSON.parse(data);
    } else {
        return null;
    }
}

function updateJson(newJson, filename) {
    if (filename === "fruits") {
        fs.writeFileSync(paths[0], JSON.stringify(newJson));
    } else if (filename === "cart") {
        fs.writeFileSync(paths[1], JSON.stringify(newJson));
    }
}

module.exports = {
    getData: getJson,
    updateData: updateJson
}