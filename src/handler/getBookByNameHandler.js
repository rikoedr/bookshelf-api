// Import Module
const books = require('../books');

// Handler Configuration
const getBookByNameHandler = (request, h) => {
  /* Find query in books name */
  let bookFilterByName = books.filter((book) => {
    const bookQuery = request.query.name.toLowerCase();
    const splitted = book.name.toLowerCase().split(' ');

    return splitted.findIndex((word) => word === bookQuery) !== -1;
  });

  /* Books Found */
  if (bookFilterByName.length !== 0) {
    bookFilterByName = bookFilterByName.map((book) => ({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    }));

    const response = h.response({
      status: 'success',
      data: {
        books: bookFilterByName,
      },
    });

    response.code(200);
    return response;
  }

  /* Books Not Found by Requested Query */
  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
    query: request.query.name,
  });

  response.code(404);
  return response;
};

// Export Module
module.exports = getBookByNameHandler;
