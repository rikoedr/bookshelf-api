// Import Modules
const addBookHandler = require('./handler/addBookHandler');
const getAllBooksHandler = require('./handler/getAllBooksHandler');
const getBookByIdHandler = require('./handler/getBookByIdHandler');
const updateBookHandler = require('./handler/updateBookHandler');
const deleteBookHandler = require('./handler/deleteBookHandler');
const getBookByNameHandler = require('./handler/getBookByNameHandler');
const getBookByStatusHandler = require('./handler/getBookByStatusHandler');

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
    handler: (request, h) => {
      const { query } = request;
      const isQueryReqeust = !!(query.name || query.reading || query.finished);

      if (!isQueryReqeust) {
        return getAllBooksHandler(request, h);
      }
      if (query.name) {
        return getBookByNameHandler(request, h);
      }
      if (query.reading) {
        return getBookByStatusHandler(request, h, 'reading');
      }
      if (query.finished) {
        return getBookByStatusHandler(request, h, 'finished');
      }
    },
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: updateBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookHandler,
  },
];

module.exports = routes;
