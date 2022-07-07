import React from "react";
import SongList from "./NavComp/SongList"
import Search from "./NavComp/Search"
import {useState,useContext} from 'react'
import IsPlaying from "../contexts/IsPlaying"
import SongsList from "../contexts/SongsList"



export default function Nav(props){
    const isPlaying = useContext(IsPlaying)
    // const list = useContext(SongsList)
    // const [searchMode,setSearchMode] = useState(false)

    // const handleClick = ()=>{
    //     setSearchMode(true)
    // }
    return (
        <>
        <SongList></SongList>
        {/* <button onClick={handleClick}>➕</button> */}
        {props.mode[0] && <Search mode = {props.mode} search={props.search}></Search>}
        </>
    )
}

// TODO:
// לממש את קומפוננטת פופ, ככה שתוסיף שיר לרשימה.