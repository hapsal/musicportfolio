import React from "react";

const Footer = () => {
    return (
        <footer className='bg-neutral-200 container mx-auto pb-10 pt-10 mt-40 items-center flex flex-col'>
            <nav className='flex flex-col lg:flex-row gap-4 text-neutral-500 font-medium uppercase'>
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
            <p className="text-neutral-500 mt-5 text-xs uppercase">&copy; 2023 HANNSALmusic. All rights reserved</p>
        </footer>
    )
}


export default Footer