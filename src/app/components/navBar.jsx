"use client";

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';

function Nav() {
  const { data: session, status } = useSession();
  return (
    <>
    <div className='linecut'></div>
      <nav className="navbar navbar-expand-lg " id='nav'>
  <div className="container-fluid">
    <Link className="navbar-brand" href="https://lin.ee/8Ty5gad">
    
    <Image src="/img/logo.png" alt="Favicon" width={60} height={60} />


    
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-linkactive mx-2" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive mx-2" href="/facebook">Facebook</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive mx-2" href="/google">Google</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive mx-2" href="/cass">คอร์สโฆษณาสายเทา</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-linkactive mx-2" href="/tool">เครื่องมือช่วยทำโฆษณาฟรี</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-linkactive mx-2" href="/admin">admin</Link>
        </li>
      </ul>
      <span className="navbar-text">

        {session ? (
          <div className='d-flex'>

         <div className='mx-5'>
         <div><img src="/img/user.png" width={50} alt="user" />  </div>
         <div className='text-center' >{session.user.name}</div>
         </div>
         <div className='mx-5'>
          <button onClick={() => signOut()} className='btn btn-outline-danger'>ออก</button>
          </div>
          </div>  
        ):(
          <><Link href="/admin/login" className='btn btn-outline-info'>login</Link></>
        )
      
      
      }
   
   
      </span>
    </div>
  </div>
</nav>
<div className='linecut'></div>

    </>
  )
}

export default Nav
