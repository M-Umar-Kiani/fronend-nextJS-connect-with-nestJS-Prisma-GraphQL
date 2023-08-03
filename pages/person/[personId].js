import React from 'react'
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_PERSON } from '@/api/query/user';

export default function personId() {

    const router = useRouter();
    const { personId } = router.query;

    const { loading, error, data } = useQuery(GET_PERSON, {
        variables: { id: parseInt(personId) },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    const person = data?.findPersonById;

    return (
        <>
            <h1>Hello</h1>
            <p>{person.id}</p>
            <p>{person.username}</p>
            <p>{person.email}</p>
        </>
    )
}
