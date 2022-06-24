import {useContext, useState} from 'react'
import IsPlaying from '../contexts/IsPlaying'
import Player from './MainComp/Player'
import React from "react";

export default function Main(){
    const isPlaying = useContext(IsPlaying)
   
    return (
        <>
        {isPlaying[0] ? 
        <div>
            <Player></Player>
        </div>
        :false}
        </>
    )
}