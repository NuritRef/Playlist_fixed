import React from "react"
import { useContext } from "react"
import User from "../contexts/user"
export default function Header(props){
    const user = useContext(User)
    return(
        <div className="userSection">
        <img id="loginImg" src={"https://icons-for-free.com/download-icon-login+person+profile+user+users+icon-1320166527284195604_512.png"}></img><h4>{`Hello ${user[0]}`}</h4>
        <div className="searchSection">
            <button className="searchBtn" onClick={()=>props.mode[1](true)}>🔎</button>
            <input className="search" type="text" id="userSearch" placeholder="Search" onInput={(e)=>props.search[1](e.target.value)}></input>
        </div>
        </div>
    )
}