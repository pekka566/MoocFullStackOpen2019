import { gql } from 'apollo-boost';

const ALL_BOOKS = gql`
  {
    allBooks {
      title
      author
      published
    }
  }
`;

export { ALL_BOOKS };
