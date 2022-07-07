import React from "react";
import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'
import './Layout.css'
import IsPlaying from './contexts/IsPlaying' 
import SongsList from './contexts/SongsList'
import User from "./contexts/user";
import { useState,useEffect } from 'react'
import axios from 'axios'

// let songList = [
//     {songName: "דולי ופן עם סטטיק ובן אל, אגם בוחבוט והצל - מנגלים",src:"Z6xJFAvaH5U",imgUrl:"https://i.ytimg.com/vi/Z6xJFAvaH5U/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLCggCLNR5CiohyVXqoxbQxB_hJl4w"},
//     {songName: "חנן בן ארי - מקום Hanan Ben Ari", src:"7J3eueT4M-M",imgUrl:"https://i.ytimg.com/vi/7J3eueT4M-M/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLC9xBbxO6WHZSOIlmg72bmA-NHZlg"},
//     {songName: `Let It Go (Disney's "Frozen") Vivaldi's Winter - The Piano Guys`, src:"6Dakd7EIgBE",imgUrl:"https://i.ytimg.com/vi/6Dakd7EIgBE/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLAVKjsajxMxvgkk7iOFDwdjgLr9wg"},
//     {songName: "התקווה 6 - הכי ישראלי (קליפ רשמי)", src:"3mNFg-EyBkU",imgUrl:"https://i.ytimg.com/vi/3mNFg-EyBkU/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLAJVzz55pD1EdlRJMJsKjmhHF8xvA"}
// ]


export default function Layout(){
    const [user,setUser] = useState("shira and nurit")
    const [isPlaying,setIsPlaying] = useState("")
    const [list,setList] = useState()
    const [searchMode,setSearchMode] = useState(false)
    const [searchBar,setSearchBar] = useState() 

    useEffect(()=>{
        async function foo(){
            try{
                const songs = await axios.get(`http://localhost:3010/playlist`)
                console.log("results on client side: ",songs.data)
                
                setList(songs.data)
                // return result.data
              }catch (error){
                console.log(error.response.data)
              }
        }
        foo()
    },[])

    console.log(list);

    
    return(
        <>
            <User.Provider value={[user,setUser]}>
                <header><Header mode={[searchMode,setSearchMode]} search={[searchBar,setSearchBar]}></Header></header>
            </User.Provider>
            <IsPlaying.Provider value={[isPlaying,setIsPlaying]}>
                <SongsList.Provider value={[list,setList]}>
                    <div className='wrapper'>
                    <nav><Nav mode={[searchMode,setSearchMode]}  search={[searchBar,setSearchBar]}></Nav></nav>
                    <main><Main></Main></main>
                    </div>
                </SongsList.Provider>
            </IsPlaying.Provider>
        </>
    )
}