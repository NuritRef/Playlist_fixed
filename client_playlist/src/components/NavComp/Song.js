import React from "react";
import { useContext, useState } from "react"
import IsPlaying from "../../contexts/IsPlaying"
import SongsList from "../../contexts/SongsList"


export default function Song(props){
    const isPlaying = useContext(IsPlaying)
    const list = useContext(SongsList)
    // const [style, setStyle] = useState({display: 'none'});

    const s = props.singleSong
    const handleSong = ()=>{
        isPlaying[1](s)
        
        // console.log(isPlaying[0])
    }

    const handleRemove = ()=>{
        // console.log(s)
        const newList = list[0].filter(song=> song != s)
        list[1](newList)
        
    }
    

    return(
        <div className="songSection">
            <div className="song">
                <button className="remove" onClick={handleRemove}>{"🗑️"}</button>
                <button className="play" onClick={handleSong}>{"▶️"}</button>
                <span>{s.songName}</span>

            </div>
            <img className="imgSong" src={s.imgUrl}></img>
        </div>
    )
}
