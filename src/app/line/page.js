// components/Line.js
import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Line() {
  return (
    <div>
      <Link href='https://lin.ee/8Ty5gad' className=''>  
        <Image src="/img/line.png" width={50} height={50} alt="line" className='lines bounce' />
      </Link>
    </div>
  );
}
