// Import Module
const books = require('../books');

// Handler Configuration
const updateBookHandler = (request, h) => {
  const { id } = request.params;
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  /* Books Information Check */
  const book = books.filter((item) => item.id === id)[0];

  if (book === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });

    response.code(404);
    return response;
  }

  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    });

    response.code(400);
    return response;
  }

  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    });

    response.code(400);
    return response;
  }

  /* Books Information Approved */
  const index = books.findIndex((item) => item.id === id);
  const updatedAt = new Date().toISOString();

  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };
  }

  const response = h.response({
    status: 'success',
    message: 'Buku berhasil diperbarui',
  });

  response.code(200);
  return response;
};

// Export Module
module.exports = updateBookHandler;
