import Layout from "@/components/Layout";
import Image from "next/image";
import homePicture from "../../public/images/home/home.jpg"
import Link from "next/link";

import LatestSong from "@/components/LatestSong";

export default function Home() {


  return (
    <>
      <main className="flex items-center w-full">
        <Layout>
          <div className="relative">
            <h1 className="absolute text-4xl font-extrabold uppercase text-gray-50 left-1/4 top-1/6 mt-10">Latest song is available now</h1>
            <LatestSong  />
            <Link href="/discography" className="absolute text-1xl text-gray-50 left-1/4 bottom-12 hover:text-sky-400">Browser other songs here</Link>
            <Image src={homePicture} alt="Sky" className="object-cover h-96 w-full" />
          </div>
          <div className="flex items-center ml-20 mt-20">
          <h1 className="text-3xl font-extrabold uppercase text-gray-50 left-1/4 top-1/4">Recent releases</h1>

          </div>
        </Layout>
      </main>
    </>
  )
}
