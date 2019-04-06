import { gql } from 'apollo-boost';

const EDIT_AUTHOR = gql`
  mutation editAuthor(
    $name: String!
    $birthYear: Int!
  ) {
    editAuthor(
      name: $name
      setBornTo: $birthYear
  ) {
      name
      born
    }
  }
`;

export { EDIT_AUTHOR };
