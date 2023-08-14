// Import Library & Routes
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

// Server Configuration
const startServer = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);
  await server.start();
  console.log(`Server sedang berjalan : ${server.info.uri}`);
};

// Starting Server
startServer();
