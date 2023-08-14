// Import Module
const books = require('../books');

// Handler Configuration
const getBookByIdHandler = (request, h) => {
  const { id } = request.params;

  const book = books.filter((item) => item.id === id)[0];

  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        book,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });

  response.code(404);
  return response;
};

// Export Module
module.exports = getBookByIdHandler;
