import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const CustomLink = ({href, title}) => {
    const router = useRouter()

    return (
        <Link href={href} className={`block lg:inline-block ${router.asPath === href ? 'text-sky-500' : 'text-stone-800'}`}>
            <span className='hover:text-sky-400'>{title}</span>
        </Link>
    )
}

const NavBar = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <header className='bg-neutral-200 container mx-auto flex lg:items-center justify-between py-8'>

            <button className="lg:hidden flex flex-col justify-center items-center ml-6" onClick={handleClick}>
                <span className={`bg-neutral-950 block h-0.5 w-6 transition-all duration-300 rounded-sm ${open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-neutral-950 block h-0.5 w-6 transition-all duration-300 rounded-sm my-0.5 ${open ? 'opacity-0' : 'opacity-1'}`}></span>
                <span className={`bg-neutral-950 block h-0.5 w-6 transition-all duration-300 rounded-sm ${open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className={`justify-between w-full block flex-grow lg:flex lg:items-center mt-10 lg:mt-0 ${open ? "block" : "hidden"}`}>
                <nav className="flex flex-col lg:flex-row ml-10 lg:ml-auto lg:mr-10 lg:justify-center flex-wrap gap-4 text-slate-50 font-medium uppercase mt-2">
                    <CustomLink href="/" title="Home" />
                    <CustomLink href="/services" title="Services" />
                </nav>
                <div className='hidden lg:block flex items-center justify-center'>
                    <Link href="/" className='text-5xl text-orange-600 font-thin uppercase drop-shadow'>HANNSAL</Link>
                </div>
                <nav className="flex flex-col lg:flex-row ml-10 lg:mr-auto lg:justify-center flex-wrap gap-4 text-slate-50 font-medium uppercase mt-2">
                    <CustomLink href="/music" title="Music" />
                    <CustomLink href="/contact" title="Contact" />
                </nav>
            </div>

            <div className='lg:hidden'>
                <Link href="/" className='text-5xl text-orange-600 font-thin uppercase drop-shadow mr-6'>HANNSAL</Link>
            </div>
            
        </header>
    )
}

export default NavBar