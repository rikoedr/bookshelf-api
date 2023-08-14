// Import Modules
const addBookHandler = require('./handler/addBookHandler');
const getAllBooksHandler = require('./handler/getAllBooksHandler');
const getBookByIdHandler = require('./handler/getBookByIdHandler');

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
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
];

module.exports = routes;
