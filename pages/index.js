import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login';
import { useSession, signIn, signOut } from "next-auth/react"
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';



export default function Home() {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div className='w-screen h-screen bg-white'>
      <Head>
        <title>Gaming-Realm</title>
      </Head>
      <Header />
      <main className='flex'>
        {/* <Sidebar /> */}
        <Sidebar />
        {/* <Feed /> */}
        <Feed />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session
    }
  }
}
