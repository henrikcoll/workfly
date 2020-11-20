import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getSession, signIn, signOut } from 'next-auth/client';

export default function Home({ session, projects }) {
  const router = useRouter();

  useEffect(() => {
    if (!session || !session.user) {
      router.push('/login');
    }
  }, [session]);

  return (
    <>
      {(!session || !session.user) && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {(session && session.user) && (
        <>
          <Head>
            <title>Task Manager</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="h-screen w-screen grid grid-cols-projects-layout">

            <main className="p-2">
              <h1 className="font-bold">Welcome to Next.js!</h1>
              Signed in as {session.user.email} <br />
              <button onClick={signOut}>Sign out</button>
            </main>
          </div>
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  // get user session
  const session = await getSession(context);

  return {
    props: { session }, // will be passed to the page component as props
  };
}