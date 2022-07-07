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


    // TODO: handle with server!!!!!!
    // const handleRemove = ()=>{
    //     // console.log(s)
    //     const newList = list[0].filter(song=> song != s)
    //     list[1](newList)
        
    // }
    

    return(
        <div className="songSection">
            <div className="song">
                <button className="remove" onClick={console.log("handleRemove")}>{"🗑️"}</button>
                <button className="play" onClick={handleSong}>{"▶️"}</button>
                

            </div>
            <span>{s.title}</span>
            <img className="imgSong" src={s.img}></img>
        </div>
    )
}
