import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const session = {}
    return (
        <nav className='flexBetween navbar'>
            <div className='flex-1 flexstart gap-10'>
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        width={115}
                        height={43}
                        alt="artsphere"
                    />
                </Link>
                <ul className="xl:flex hidden text-small gap-7">
                    {NavLinks.map((navLink) => (
                        <Link href={navLink.href} key={navLink.key}>
                            {navLink.text}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='flexCente gap-4'>
                {session ? (
                    <>
                        {/* UserPhoto component or image */}
                        <Link href="/create-project">
                            share your work
                        </Link>
                    </>
                ) : (
                    <AuthProviders />
                )}
            </div>
        </nav>
    )
}

export default Navbar
