import React, { useState } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { ALL_AUTHORS } from '../queries/allAurhors';
import './styles.css';

const Authors = props => {
  if (!props.show) {
    return null;
  }
  const result = useQuery(ALL_AUTHORS);
  const authors = result.loading ? [] : result.data.allAuthors;
  return (
    <div>
      <h2>authors</h2>
      <div>
        <div class="wrapper">
          <div />
          <div className="title">born</div>
          <div className="title">books</div>
        </div>
        {authors.map(a => (
          <div class="wrapper">
            <div>{a.name}</div>
            <div>{a.born}</div>
            <div>{a.bookCount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors;
