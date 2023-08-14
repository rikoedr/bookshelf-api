// Import Module
const books = require('../books');

// Handler Configuration
const deleteBookHandler = (request, h) => {
  const { id } = request.params;

  const index = books.findIndex((item) => item.id === id);
  if (index !== -1) {
    books.splice(index, 1);

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });

  response.code(404);
  return response;
};

// Export Module
module.exports = deleteBookHandler;
