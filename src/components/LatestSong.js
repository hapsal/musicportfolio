import useFetch from "@/components/hooks/useFetch";
import React from "react";

import { motion } from "framer-motion"

const LatestSong = () => {
    const [data, loading] = useFetch('https://audius-discovery-10.cultur3stake.com/v1/users/rWN7z/tracks?app_name=hannsalmusic');

    if (loading) {
      return <p>Loading...</p>;
    }
  
   //console.log(data.data)
  
    const latestSong = data.data.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))[0];
  
    //console.log(latestSong)
    return (
        <div className="absolute left-1/4 top-24 lg:top-1/4 border-solid bg-orange-500 rounded-md border-2 border-transparent drop-shadow-md p-3 lg:p-2 lg:w-2/5 mt-10">
            <div className="md:flex">
                <img src={latestSong.artwork["150x150"]} alt={latestSong.description} className="rounded-md drop-shadow" />
                <div className="flex flex-col lg:ml-4 justify-evenly">
                    <div className="basis-1/2">
                        <p className="text-gray-50">{latestSong.title}</p> 
                    </div>
                    <p className="text-gray-50 font-bold">{latestSong.user.name}</p>   
                    <motion.a className="text-gray-50 hover:text-sky-400 underline mt-4" href={`https://audius.co/`+latestSong.permalink} target={"_blank"}
                    initial={{x: 100}}
                    animate={{x: 0}}
                    >Listen here</motion.a>
                </div>
            </div>
        </div>
    )
}

export default LatestSong