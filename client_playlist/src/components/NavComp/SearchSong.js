import React from "react"
import { useContext } from "react"
import IsPlaying from "../../contexts/IsPlaying"
import SongsList from "../../contexts/SongsList"

export default function SearchSong(props){
    const isPlaying = useContext(IsPlaying)
    const list = useContext(SongsList)
    const song = props.search
    console.log("איןד ןד רקמגקרןמע איק דםמעד!")

    const handleAdd=()=>{
        const newSong = {songName:song.title,src:song.url,imgUrl:song.thumbnail.url}
        list[1]([...list[0],newSong])
    }

    const handlePlay=()=>{
        const curSong = {songName:song.title,src:song.url,imgUrl:song.thumbnail.url}
        isPlaying[1](curSong)
    }

    return(
        <div className="songSection">
        {/* {console.log(props.search.title)} */}
            <div className="song">                
                <button className="addToPlaylist" onClick={handleAdd}>{"❤️"}</button>
                <button className="play" onClick={handlePlay}>{"▶️"}</button>   
                <span>{song.title}</span> 
            </div>
            <img className="searchImg" src={song.thumbnail.url}></img>
        </div>
    )
}

// onClick={handleRemove}
// onClick={handleSong}