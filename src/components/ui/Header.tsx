import Link from 'next/link'
import React from 'react'
import Image from "next/image";

function Header() {
  return (
    <header>
        <Link href="/">
        <Image src="/logo.png" 
        alt="Logo" 
        width={40} 
        height={60} />
        </Link>
    </header>
  )
}

export default Header