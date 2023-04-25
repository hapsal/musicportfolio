import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const CustomLink = ({href, title}) => {
    const router = useRouter()

    return (
        <Link href={href} className={router.asPath === href ? 'text-sky-500' : 'text-gray-50'}>
            <span className='hover:text-sky-400'>{title}</span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header className='w-full bg-zinc-900 flex justify-between py-8'>
            <Link href="/" className='text-4xl text-gray-50 font-bold ml-20 uppercase'>HANNSAL</Link>
            <nav className='flex gap-4 text-slate-50 font-medium uppercase mr-20 mt-2'>
                <CustomLink href="/" title="Home" />
                <CustomLink href="/about" title="About" />
                <CustomLink href="/discography" title="Discography" />
                <CustomLink href="/contact" title="Contact" />
            </nav>
        </header>
    )
}

export default NavBar