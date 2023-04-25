import React from "react";

const Footer = () => {
    return (
        <footer className='w-full bg-zinc-900 flex justify-between py-8'>
            <p className="text-gray-50 ml-20 uppercase">&copy; 2023</p>
            <nav className='flex gap-4 text-slate-50 font-medium uppercase mr-20 mt-2'>
                <a href="/" target={"_blank"}>
                Instagram
                </a>
                <a href="/" target={"_blank"}>
                Twitter
                </a>
                <a href="/" target={"_blank"}>
                Youtube
                </a>
                <a href="/" target={"_blank"}>
                Spotify
                </a>
                <a href="/" target={"_blank"}>
                Soundcloud
                </a>
            </nav>
        </footer>
    )
}


export default Footer