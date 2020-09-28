const Hapi = require('@hapi/hapi');
const getRoutes = require('./routes/getRoutes');
const postRoutes = require('./routes/postRoutes');
const putRoutes = require('./routes/putRoutes');
const deleteRoutes = require('./routes/deleteRoutes');
const errorHanlerRoute = require('./routes/errorHandlerRoute');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    //  Get Routes
    server.route(getRoutes.home);
    server.route(getRoutes.allData);
    server.route(getRoutes.fruitData);

    //  Post Routes
    server.route(postRoutes.addFruit);

    // Put Routes
    server.route(putRoutes.updateFruit);
    server.route(putRoutes.updateCart);

    // Delete Routes
    server.route(deleteRoutes.deleteFruit);
    server.route(deleteRoutes.deleteCart);

    // Error Handling Route
    server.route(errorHanlerRoute.errorRoute);

    // Start Server
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
