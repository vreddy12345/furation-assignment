import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../store/actions/bookActions';
import BookListing from '../components/BookListing';

const BookListingPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <h1>All Books</h1>
      <BookListing books={books} />
    </div>
  );
};

export default BookListingPage;
