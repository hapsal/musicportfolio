import React from "react";
import Link from 'next/link'
import instagramIcon from "../../public/images/icons/instagram.png"
import twitterIcon from "../../public/images/icons/twitter.png"
import youtubeIcon from "../../public/images/icons/youtube.png"
import spotifyIcon from "../../public/images/icons/spotify.png"
import soundcloudIcon from "../../public/images/icons/soundcloud.png"
import Image from "next/image";

const Footer = () => {
    return (
        <footer className='bg-neutral-200 container mx-auto pb-10 pt-10 mt-40 items-center flex flex-col'>
            <nav className='flex flex-row gap-4 text-neutral-500 font-medium uppercase'>
                <Link href="https://instagram.com/hannsalmusic" target={"_blank"}>
                    <Image src={instagramIcon} alt="HANNSAL instagram" className="drop-shadow" />
                </Link>
                <Link href="https://twitter.com/hannsalmusic" target={"_blank"}>
                    <Image src={twitterIcon} alt="HANNSAL twitter" className="drop-shadow" />
                </Link>
                <Link href="https://www.youtube.com/channel/UCT1Cqpnduia-KgqzGYm8K0g" target={"_blank"}>
                    <Image src={youtubeIcon} alt="HANNSAL youtube" className="drop-shadow" />
                </Link>
                <Link href="/" target={"_blank"}>
                    <Image src={spotifyIcon} alt="HANNSAL spotify" className="drop-shadow" />
                </Link>
                <Link href="https://soundcloud.com/hannsal" target={"_blank"}>
                    <Image src={soundcloudIcon} alt="HANNSAL soundcloud" className="drop-shadow" />
                </Link>
            </nav>
            <p className="text-neutral-500 mt-5 text-xs uppercase">&copy; 2023 | HANNSALmusic |  All rights reserved</p>
        </footer>
    )
}


export default Footer