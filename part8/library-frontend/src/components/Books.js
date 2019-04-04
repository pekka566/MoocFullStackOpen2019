import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { ALL_BOOKS } from '../queries/allBooks';
import './styles.css';

const Books = props => {
  if (!props.show) {
    return null;
  }
  const result = useQuery(ALL_BOOKS);
  const books = result.loading ? [] : result.data.allBooks;

  return (
    <div>
      <h2>books</h2>
      <div>
        <div className="wrapper">
          <div />
          <div className="title">author</div>
          <div className="title">published</div>
        </div>
        {books.map(a => (
          <div className="wrapper" key={a.title}>
            <div>{a.title}</div>
            <div>{a.author}</div>
            <div>{a.published}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
