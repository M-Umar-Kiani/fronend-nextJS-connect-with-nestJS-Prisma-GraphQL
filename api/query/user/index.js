import { gql } from '@apollo/client';

export const GET_PERSONS = gql`
query {
  persons {
    id
    username
    email
  }
}
`;

export const GET_PERSON = gql`
    query getPersonById($id: Int!){
        findPersonById(personId: $id){
            id
            username
            email
        }
    }
`;