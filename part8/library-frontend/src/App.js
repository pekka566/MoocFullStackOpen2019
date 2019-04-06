import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { CREATE_BOOK } from './queries/createBook';
import { ALL_BOOKS } from './queries/allBooks';
import { EDIT_AUTHOR } from './queries/editAuthor';
import { ALL_AUTHORS } from './queries/allAurhors';

import Authors from './components/Authors';
import Books from './components/Books';
import NewBook from './components/NewBook';

const App = () => {
  const [page, setPage] = useState('authors');
  const [errorMessage, setErrorMessage] = useState(null);
  const handleError = error => {
    setErrorMessage(error.graphQLErrors[0].message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 10000);
  };

  const addBook = useMutation(CREATE_BOOK, {
    onError: handleError,
    refetchQueries: [{ query: ALL_BOOKS }]
  });

  const editAuthor = useMutation(EDIT_AUTHOR, {
    onError: handleError,
    refetchQueries: [{ query: ALL_AUTHORS }]
  });

  return (
    <div>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

      <Authors show={page === 'authors'} updateAuthor={editAuthor} />

      <Books show={page === 'books'} />

      <NewBook show={page === 'add'} addBook={addBook} />
    </div>
  );
};

export default App;
