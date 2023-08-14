// Import Modules
const addBookHandler = require('./handler/addBookHandler');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      const response = h.response({
        status: 'success',
        message: 'success connect',
      });

      response.code(200);
      return response;
    },
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
];

module.exports = routes;
