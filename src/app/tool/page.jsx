import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <>
        <h3>ไปยังหน้าหนัก<Link href="/">Home</Link></h3>
      <div className="text-center">
    
        <h3>ดาวน์โหลดเครื่องมือทำการตลาดฟรี</h3>
        <img src="/img/head1.jpg" alt="" />
      </div>

      <div class="d-flex justify-content-evenly m-5">
        <div>
      <h3>Dowloads Google</h3>
      <Link href="/tool/google" type="button" className="btn btn-outline-primary">Google ! </Link>
      </div>
      <div>
      <h3>Dowloads Facebook</h3>
      <Link href="/tool/facebook" type="button" className="btn btn-outline-success">Facebook !</Link>
      </div>
      </div>

      <div className="text-center">
      <img src="/img/fbgg.png" alt="" />
      </div>
    </>
  )
}

export default page
