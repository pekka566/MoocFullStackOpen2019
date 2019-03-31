import { gql } from 'apollo-boost';

const ALL_AUTHORS = gql`
  {
    allAuthors {
      name
      born
      bookCount
    }
  }
`;

export { ALL_AUTHORS };
