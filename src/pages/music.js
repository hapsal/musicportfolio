import React from "react";
import useFetch from "@/components/hooks/useFetch";

import { motion } from "framer-motion"

const Music = () => {
    const [data, loading] = useFetch('https://audius-discovery-10.cultur3stake.com/v1/users/rWN7z/tracks?app_name=hannsalmusic');

    if (loading) {
      return <p>Loading...</p>;
    }
    
    return (
        <div className="flex justify-center mt-6">
            {data.data.length > 0 ? (
            <ul className="grid lg:grid-cols-3 gap-4">
                {data.data.map((song) => (
                <li key={song.id} className="text-center">
                    <img src={song.artwork["480x480"]} alt={song.description} className="rounded-md drop-shadow mb-4" />
                    <a className="text-neutral-900 lg:text-lg font-semibold drop-shadow hover:text-sky-400" href={`https://audius.co` + song.permalink} target={"_blank"}>
                        <motion.div whileHover={{scale: 1.2}} transition={{type: "spring", stiffness: 400}}>"{song.title}"</motion.div></a>
                </li>
                ))}
            </ul>
            ) : (
            <p>Loading...</p>
            )}
        </div>
    )
}

export default Music