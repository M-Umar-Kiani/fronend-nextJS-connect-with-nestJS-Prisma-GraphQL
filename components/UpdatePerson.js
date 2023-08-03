import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PERSON_BY_ID, UPDATE_PERSON } from '../lib/queries';


const UPDATE_PERSON = gql`
mutation updatePerson($args: Int!, $updatePersonArgs: AddPersonArgs!){
    updatePerson(personId: $args, updatePersonArgs: $updatePersonArgs){
      id
      username
      email
    }
  }
`;

const UpdatePerson = ({ id }) => {
    const { loading, error, data } = useQuery(GET_PERSON_BY_ID, {
        variables: { id: parseInt(id) }, // Ensure id is converted to an integer
    });

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const [updatePerson] = useMutation(UPDATE_PERSON);

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePerson({ variables: { id: parseInt(id), username, email } });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const person = data.getPersonById;

    return (
        <div>
            <h2>Update Person</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username || person.username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email || person.email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdatePerson;
