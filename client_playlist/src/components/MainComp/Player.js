import React, { useContext } from "react";
import { useRef } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import IsPlaying from "../../contexts/IsPlaying";


export default function Player(){
    const isPlaying = useContext(IsPlaying)
    const videoRef = useRef();
    const videoSrc = {
      type: "video",
      sources: [
        {
          src: isPlaying[0].src,
          provider: "youtube"
        }
      ]
    };

    const playerFuncs = {
        onplay: ()=>videoRef.current.play(),
        onpause : ()=>videoRef.current.pause()
    }
    return(
      <div className="player">
          <Plyr source={videoSrc} ref={videoRef} onPlay={playerFuncs.onplay} onPause={playerFuncs.onpause}/>
        {console.log("who is playing? : ",isPlaying[0])}
      </div>
    )
}
