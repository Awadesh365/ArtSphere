import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
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
                <ul className="xl:flex hidden
                    text-small gap-7">

                </ul>
            </div>
        </nav >
    )
}

export default Navbar