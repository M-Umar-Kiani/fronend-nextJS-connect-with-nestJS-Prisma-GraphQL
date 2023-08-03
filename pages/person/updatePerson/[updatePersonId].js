import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { UPDATE_PERSON } from "@/api/mutation/user"
import { GET_PERSON } from '@/api/query/user';
import { useMutation, useQuery } from '@apollo/client';




export default function updatePersonId() {
  const router = useRouter();
  const { updatePersonId } = router.query;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [updatePerson] = useMutation(UPDATE_PERSON);

  const { loading, error, data } = useQuery(GET_PERSON, {
    variables: { id: parseInt(updatePersonId) },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const person = data?.findPersonById;
  console.log("Check person", person)
  // useEffect(()=>{
  //   if(person) {
  //     setUsername(person.username)
  //     setEmail(person.email)
  //   }
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePerson({ variables: { args: parseInt(updatePersonId), updatePersonArgs: { username, email } }, });
    setUsername('');
    setEmail('');
    alert("update person successfully")
  };


  return (
    <>
      This is update person form
      <h1>Update Person</h1>
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
        <button type="submit">Update Person</button>
      </form>
    </>
  )
}
