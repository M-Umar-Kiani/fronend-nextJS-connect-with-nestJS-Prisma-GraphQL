import { useQuery, useMutation } from '@apollo/client';
import Link from 'next/link';
import { GET_PERSONS } from '@/api/query/user';
import { DELETE_PERSON } from '@/api/mutation/user';


export default function Home() {

  const [deletePerson] = useMutation(DELETE_PERSON);

  const handleDelete = async (id) => {
    try {
      const { data } = await deletePerson({
        variables: { args: parseInt(id) },
      });

      // Handle successful deletion
      console.log('Person deleted:', data.deletePerson);
    } catch (err) {
      // Handle error
      console.error('Error deleting person:', err);
    }
  };



  const { loading, error, data } = useQuery(GET_PERSONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div>
      <h1>Persons</h1>
      <ul>
        {data.persons.map((person) => (
          <li key={person.id}>
            {/* <h1>{personId}</h1> */}
            <h1>{person.id}</h1>
            <h2>{person.username}</h2>
            <p>{person.email}</p>
            <Link href={`/person/${person.id}`}>
              Get Person By Id
            </Link><br /><br />
            <Link href={`/person/updatePerson/${person.id}`}>
              update Person
            </Link> <br /><br />
            <button onClick={()=>{handleDelete(person.id)}} disabled={loading}>
              Delete Person
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}