import Layout from "@/components/Layout";
import Image from "next/image";
import homePicture from "../../public/images/home/home.jpg"
import catPicture from "../../public/images/home/hannsalcat.jpg"
import Link from "next/link";

import LatestSong from "@/components/LatestSong";

export default function Home() {


  return (
    <>
      <main>
        <Layout>
          <div className="relative">
            <h1 className="absolute lg:text-4xl font-extrabold uppercase text-gray-50 left-1/4 top-1/6 mt-10">Latest song is available now</h1>
            <LatestSong  />
            <Image src={homePicture} alt="Sky" className="object-cover lg:h-96 w-full" />
            <Link href="/music" className="absolute mt-24 text-1xl sm:text-gray-50 left-1/4 sm:bottom-12 hover:text-sky-400">Browser other songs here</Link>
          </div>
          <div className="flex flex-col mt-40 lg:mt-20 items-center">
          <Image src={catPicture} alt="cat" className="rounded-xl" />
            <p className="max-w-prose mt-10 pl-5 pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie augue sit amet purus feugiat tincidunt. 
              Nulla a ante neque. Ut suscipit efficitur turpis vitae ultricies. Nulla mollis elit ut dui dapibus posuere. Ut viverra consectetur nisl sodales lobortis.</p>
          </div>
        </Layout>
      </main>
    </>
  )
}
