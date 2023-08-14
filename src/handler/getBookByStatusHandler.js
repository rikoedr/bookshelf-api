// Import Module
const books = require('../books');

// Handler Configuration
const getBookByStatusHandler = (request, h, status) => {
  let query;
  let selectedBooks;

  if (status === 'reading') {
    query = request.query.reading === '1';
    selectedBooks = books.filter((item) => item.reading === query);
  }

  if (status === 'finished') {
    query = request.query.finished === '1';
    selectedBooks = books.filter((item) => item.finished === query);
  }

  const simplifyBooks = selectedBooks.map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));

  const response = h.response({
    status: 'success',
    data: {
      books: simplifyBooks,
    },
  });

  response.code(200);
  return response;
};

// Export Module
module.exports = getBookByStatusHandler;
