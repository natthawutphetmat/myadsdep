import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div className='container'>
       <h3>ไปยังหน้าหนัก<Link href="/">Home</Link></h3>
      <img src="/img/class.jpg" width="100%" alt="class" />
      <div className="d-flex justify-content-around m-5">
      <Link href="/cass/facebook" className='btn btn-outline-primary'>สนใจคอร์สเรียนยิงแอด facebook สายเทา</Link>
      <Link href="/cass/google" className='btn btn-outline-primary'>สนใจคอร์สเรียนยิงแอด google สายเทา</Link>

      </div>
      <div className="text-center m-5">
        <img src="/img/course.jpg" width={500} alt="" className='mt-5' />
      </div>
    </div>
  )
}
