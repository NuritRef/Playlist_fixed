import React, { useEffect, useState } from "react"
import { useContext } from "react"
import SongsList from "../../contexts/SongsList"
import axios from 'axios'
import SearchSong from './SearchSong'

export default function Search(props){
    const list = useContext(SongsList)
    // const [searchBar,setSearchBar] = useState() 
    const [searchList, setSearchList] = useState([])

    // const options = {
    //     method: 'GET',
    //     url: 'https://simple-youtube-search.p.rapidapi.com/search',
    //     params: {query: props.search[0], safesearch: 'false'},
    //     headers: {
    //       'X-RapidAPI-Key': '88f231d6b2msh65442fb1e6c87e6p163f8cjsn39832660fab1',
    //       'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
    //     }
    //   };
    
    useEffect(()=>{
        async function foo(){
            try{
                const result = await axios.get(`http://localhost:3001/search/${props.search[0]}`)
                // console.log("client result: ",result)
                console.log("results on client side: ",result.data)
                
                setSearchList(result.data)
                // return result.data
              }catch (error){
                console.log(error.response.data)
              }
        }
        foo()
    },[])
    
    return(
        <>
        {console.log("search list: " ,searchList)}
        <div id="PopUpScreen">
            {/* <input className="search" type="text" id="userSearch" placeholder="Search" onInput={(e)=>setSearchBar(e.target.value)}></input>
            <button onClick={getSearch}>search</button> */}
            {props.mode[0]&&searchList.results&&searchList.results.map(song=>{
                return(
                    <div className="songSearchSection">
                    <SearchSong search = {song}></SearchSong>
                    </div>
                )
            })}
        </div>
        </>
    )
}