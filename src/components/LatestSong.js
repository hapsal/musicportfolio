import useFetch from "@/components/hooks/useFetch";
import React from "react";
import Image from "next/image"

const LatestSong = () => {
    const [data, loading] = useFetch('https://audius-discovery-10.cultur3stake.com/v1/users/rWN7z/tracks?app_name=hannsalmusic');

    if (loading) {
      return <p>Loading...</p>;
    }
  
   //console.log(data.data)
  
    const latestSong = data.data.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))[0];
  
    //console.log(latestSong)
    return (
        <div className="absolute left-1/4 top-1/4 pt-5">
            <div className="flex flex-row justify-center space-x-4 border-solid bg-sky-950 rounded border-2 border-transparent p-2">
                <img src={latestSong.artwork["150x150"]} alt={latestSong.description} className="rounded" />
                <p className="text-gray-50">{latestSong.title}</p>
                <p className="text-gray-50">{latestSong.user.name}</p>
                <a className="text-gray-50 hover:text-sky-400" href={`https://audius.co/` + latestSong.permalink} target={"_blank"}>Listen here</a>
            </div>
        </div>
    )
}

export default LatestSong