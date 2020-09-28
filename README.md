## Fruit Ordering RESTful API - Built with Hapi JS (Part 1)
  [![Hapi Js](https://img.shields.io/badge/Framework-Hapi%20Js-orange.svg)](https://https://hapi.dev/)
  [![Language Used](https://img.shields.io/badge/Language-Javascript-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![License](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)

The idea here is to create simplest possible RESTful API that can act as foundation block of large API building projects. For this reason I haven't added any database like MongoDB or MySQL or anything of that sorts. Focus is on gaining the "getting started" knowledge. 

### Understanding Project Structure

#### **Data Layer :** 

1. **fruits.json -** We have a List of Fruit Objects, each object containing id, fruit image, fruit name, quantity and price.

   ```json
   {
     "id": 1001,
     "product": "🍎",
     "name": "apple",
     "price": 105,
     "quantity": "1 kg"
   },
   ... 
   ```

2. **cart.json -** It is a *single object list*, describing "Current Status" of Fruit order cart. Ofcourse we can have multiple "Order" objects, or for the matter of fact multiple user's cart objects. But just to keep things simple, I have kept single order object with single user. So only one thing (object) would update in this project.

   ```json
   [
     {
       "cartId": 2001,
       "username": "Krupesh",
       "productIds": [],
       "quatities": [],
       "orderDate": ""
     }
   ]
   ```

3. **dataController.js -** It does all the retrieving and updating data for us, when the API function calls for it. So our API is not touching data directly. You know, isolating chunks of codes and making them work independently is always a good thing, it helps you scale things up and maintaing them easily in long run. Also keeps your code clean. <br>(PS: You feel like a smart coder 😉)

   We will discuss code in article.

   

#### Server & Routes Layer

1. **app.js -** *The gate keeper of our castle lives here.* It has all code for starting a server and instances of various kinds of routes. 
2. **routes/* -** This is where all the ministers of our castle kingdom stays. They help outside people (users) access and/or modify data (wealth & treasure) thorugh dataController. Yes, I understand creating a "Kingdom" analogy for Fruits Ordering API is not best thing, But it almost always works for understanding any API.

Picturing API as the Kingdom and all Layers (which together constitutes API) as different components would make things easy and inetresting. 

Keeping crazy analogies for blog 😄, Feel free to clone and use above code in your projects 🚀

### Getting Started

Needless to say, it is a Node Js project, so you need to install that first. After you have cloned, run below commad in Terminal for installing Hapi Js and dependencies

```shell
npm install
```

Time to start the Server : 

```shell
npm start
```

Thats it, you should have a server up and running; waiting for GET, PUT, POST, DELETE requests. I would recommend to use **"Postman" for testing/interacting with API.**

I have made your testing life easy by putting all endpoints in **testing** directory inside this repo, just **import json** file residing inside this folder **in Postman.**

If you don't want to use Postman, Below are the endpoints : 

```js
// Get Requests
-> http://localhost:3000/api/fruits
-> http://localhost:3000/api/cart

// Post Requests
-> http://localhost:3000/api/fruits
// This needs json fruit object in body of request:
{
    "id": 1009,
    "product": "🍎",
    "name": "apple",
    "price": 105,
    "quantity": "1 kg"
}

// Put Requests
-> http://localhost:3000/api/cart
// Body contains json cart list with single order object
[
    {
        "cartId": 2001,
        "username": "Krupesh",
        "productIds": [1002,1007],
        "quatities": [1,3],
        "orderDate": "2020-03-16"
    }
]

-> http://localhost:3000/api/fruits
// Body contains json of fruit object
{
    "id": 1009,
    "product": "🍎",
    "name": "apple",
    "price": 125,
    "quantity": "1 kg"
}

// Delete Requests
-> http://localhost:3000/api/cart
-> http://localhost:3000/api/fruits/{id}
// put valid id like 1003 in place of {id} to remove fruit object
```

