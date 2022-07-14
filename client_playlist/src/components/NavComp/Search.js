import React, { useEffect, useState } from "react"
import { useContext } from "react"
import SongsList from "../../contexts/SongsList"
import axios from 'axios'
import SearchSong from './SearchSong'

export default function Search(props){
    const list = useContext(SongsList)
    // const [searchBar,setSearchBar] = useState() 
    const [searchList, setSearchList] = useState([])

    useEffect(()=>{
        async function foo(){
            try{
                const result = await axios.get(`http://localhost:3010/search/${props.search[0]}`)
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

    const handleClose = () => {
        console.log("close?");
        
      };
    
    return (
        <div className="PopUpScreen">
          <div className="PopUp-header">
            <button className="close-search" onClick={handleClose}>
              {"X"}
            </button>
            <h3>Add to playlist-</h3>
          </div>
          {console.log("search list: ", searchList)}
          <div className="found-list">
            {/* <input className="search" type="text" id="userSearch" placeholder="Search" onInput={(e)=>setSearchBar(e.target.value)}></input>
                <button onClick={getSearch}>search</button> */}
            {props.mode[0] &&
              searchList &&
              searchList.map((song) => {
                return (
                  <div className="songSection">
                    <SearchSong search={song}></SearchSong>
                  </div>
                );
              })}
          </div>
        </div>
      );
}



// return(
    //     <>
    //     {console.log("search list: " ,searchList)}
    //     <div id="PopUpScreen">
    //         {/* <input className="search" type="text" id="userSearch" placeholder="Search" onInput={(e)=>setSearchBar(e.target.value)}></input>
    //         <button onClick={getSearch}>search</button> */}
    //         {props.mode[0]&&searchList&&searchList.map(song=>{
    //             return(
    //                 <div className="songSection">
    //                 <SearchSong search = {song}></SearchSong>
    //                 </div>
    //             )
    //         })}
    //     </div>
    //     </>
    // )



// const options = {
    //     method: 'GET',
    //     url: 'https://simple-youtube-search.p.rapidapi.com/search',
    //     params: {query: props.search[0], safesearch: 'false'},
    //     headers: {
    //       'X-RapidAPI-Key': '88f231d6b2msh65442fb1e6c87e6p163f8cjsn39832660fab1',
    //       'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
    //     }
    //   };
    