"use client"

import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { Button } from '@base-ui/react';
import ModeToggle from './DarkModeToggle';

function Header() {
  const user = null; // Replace with your user authentication logic

  return (
    <header className="bg-popover relative flex h-24 w-full item-center justify-between sm:px-8" >
        <Link  href="/">
        <Image src="/logo.png" 
        alt="Logo" 
        width={40} 
        height={60}
        className="rounded-full"
        priority />

        <h1 className="flex flex-col font-semibold ">
          Next<span>Notes</span>
        </h1>
        </Link>
        <div className="flex gap-4">
          {
            user? (
              "logout")
              : (
                <>
                <Button>
                  <Link  href="/login">Login</Link>
                </Button> 
                <Button>
                  <Link  className="hidden sm:block" href="/Signup">SignUp</Link>
                </Button> 
                </>
              )
          }
          <ModeToggle />
        </div>
        
        
    </header>
  )
}

export default Header