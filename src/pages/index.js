import Image from "next/image";
import homePicture from "../../public/images/home/home.jpg"
import catPicture from "../../public/images/home/hannsalcat.jpg"
import LatestSong from "@/components/LatestSong";
import { motion } from "framer-motion"

export default function Home() {


  return (
      <motion.div initial={{opacity: 0}} 
      animate={{opacity: 1}}
      transition={{ delay: 0.8, duration: 1 }}
      className="min-h-screen"
      >
          <div className="relative">
            <h1 className="absolute lg:text-4xl font-extrabold uppercase text-gray-50 left-1/4 top-1/6 mt-10">Latest song is available now</h1>
            <div className="flex justify-center">
              <LatestSong  />
              <Image src={homePicture} alt="Sky" className="object-cover lg:h-96 w-full" />
            </div>
          </div>
          <div className="flex flex-col mt-40 lg:mt-20 items-center">
          <Image src={catPicture} alt="cat" className="rounded-xl drop-shadow-md" />
            <p className="max-w-prose mt-10 pl-5 pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie augue sit amet purus feugiat tincidunt. 
              Nulla a ante neque. Ut suscipit efficitur turpis vitae ultricies. Nulla mollis elit ut dui dapibus posuere. Ut viverra consectetur nisl sodales lobortis.</p>
              <p className="max-w-prose mt-10 pl-5 pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie augue sit amet purus feugiat tincidunt. 
              Nulla a ante neque. Ut suscipit efficitur turpis vitae ultricies.</p>
              <iframe src="https://www.youtube.com/embed/c-j0hEXeJ1A" title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              className="mt-20 aspect-video w-full lg:w-1/2 lg:h-1/2"></iframe>
          </div>
      </motion.div>
  )
}
