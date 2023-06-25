import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook } from '../store/actions/bookActions';
import BookDetails from '../components/BookDetails';

const BookDetailsPage = ({ match }) => {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(fetchBook(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <div>
      <h1>Book Details</h1>
      <BookDetails book={book} />
    </div>
  );
};

export default BookDetailsPage;
