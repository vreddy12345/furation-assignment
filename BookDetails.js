import React from 'react';

const BookDetails = ({ book }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Price: ${book.price}</p>
      <p>Description: {book.description}</p>
    </div>
  );
};

export default BookDetails;
