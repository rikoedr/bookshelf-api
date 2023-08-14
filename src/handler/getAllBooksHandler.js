// Import modules
const books = require('../books');

// Handler Configuration
const getAllBooksHandler = (request, h) => {
  const getBooks = books.map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));

  const response = h.response({
    status: 'success',
    data: {
      books: getBooks,
    },
  });

  response.code(200);
  return response;
};

// Export Module
module.exports = getAllBooksHandler;
