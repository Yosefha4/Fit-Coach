"use client"

import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const routes = [
    {
        name:"Chat",
        path:"/",
    },
    {
        name:"Profile",
        path: "/profile",
    },
]

const Navbar = () => {
    const pathname = usePathname();
  return (
    <div className='p-4 flex justify-between items-center bg-black text-white'>
        <Link href="/">
            <h2 className='text-2xl font-bold'>Fit AI</h2>
        </Link>
        <div className='flex items-center gap-x-6 text-lg'>
            {routes.map((route,idx) => (
                <Link href={route.path} key={idx} className={pathname === route.path ? "border-b-2 border-yellow-400" : ""}>
                    {route.name}
                </Link>
            ))}

            <UserButton afterSignOutUrl='/' />
        </div>
    </div>
  )
}

export default Navbar