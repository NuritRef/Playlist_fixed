import React from "react";
import { useContext } from "react"
import SongsList from "../../contexts/SongsList"
import Song from "./Song"

export default function SongList(){
    const list = useContext(SongsList)
    return(
        <>
        <h2>My Playlist:</h2>
        {list[0].map(song => <Song singleSong = {song}></Song> )}
        </>
    )
}
