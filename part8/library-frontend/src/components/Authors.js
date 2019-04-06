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

  const [birthYear, setBirthYear] = useState('');
  const [name, setName] = useState('');

  const submit = async e => {
    e.preventDefault();
    const updateName = name.length === 0 ? authors[0].name : name;
    await props.updateAuthor({
      variables: { name: updateName, birthYear }
    });
    setName('');
    setBirthYear('');
  };

  const handleChange = e => {
    setName(e.target.value);
  }

  return (
    <div>
      <h2>authors</h2>
      <div>
        <div className="wrapper">
          <div />
          <div className="title">born</div>
          <div className="title">books</div>
        </div>
        {authors.map(a => (
          <div className="wrapper" key={a.name}>
            <div>{a.name}</div>
            <div>{a.born}</div>
            <div>{a.bookCount}</div>
          </div>
        ))}
      </div>
      <h2>Set birthyear</h2>
      <form onSubmit={submit}>
        <div className="wrapper">
          <div>
            Name:
          </div>
          <div>
            <label>
              <select value={name} onChange={handleChange}>
                {authors.map(a => (
                  <option value={a.name}>{a.name}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className="wrapper">
          <div>born</div>
          <div>
            <input
              value={birthYear}
              onChange={({ target }) => setBirthYear(Number(target.value))}
            />
          </div>
        </div>
        <div>
          <div>
            <button type="submit">update author</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Authors;
