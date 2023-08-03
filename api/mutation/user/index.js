import { gql } from '@apollo/client';

export const ADD_PERSON = gql`
    mutation addPerson($args: AddPersonArgs!){
    addPerson(addPersonArgs: $args){
      id 
      username
      email
    }
  }
`;

export const UPDATE_PERSON = gql`
  mutation updatePerson($args: Int!, $updatePersonArgs: AddPersonArgs!){
    updatePerson(personId: $args, updatePersonArgs: $updatePersonArgs){
      id
      username
      email
    }
  }
`

export const DELETE_PERSON = gql`
mutation deletePerson($args : Int!){
  deletePerson(personId: $args){
    id
    username
    email
  }
}
`