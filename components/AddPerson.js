import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { ADD_PERSON } from '@/api/mutation/user';

export default function AddPerson() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');


    const [addPerson] = useMutation(ADD_PERSON);
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
        addPerson({ variables: { args:{username, email} } });
        setUsername('');
        setEmail('');
        alert("Add Person Successfully")
      };


    return (
        <>
            <h1>Add Person</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /><br /><br />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br /><br />
                <button type="submit">Add Person</button>
            </form>
        </>
    )
}
