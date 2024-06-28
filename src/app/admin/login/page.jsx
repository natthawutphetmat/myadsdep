"use client";
import Profile from '../../components/Profile';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';



export default function Page() {
  const { data: session } = useSession();
  const router = useRouter();


  if(session) {
router.push('/admin');
  }

  return (
   <>
    <div className='admin'>
      <h1>Page</h1>
      {session ? (
        <>
          <p>Signed in as {session.user.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <p>You are not signed in</p>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}

      
    </div>
 
   </>
  );
}
