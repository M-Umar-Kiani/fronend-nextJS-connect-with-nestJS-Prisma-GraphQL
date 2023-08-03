import { Inter } from 'next/font/google'
import AddPerson from '@/components/AddPerson'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>This is index page</h1>
      <div>
        <h1>Add Person</h1>
        <AddPerson />
      </div>
    </>
  )
}
