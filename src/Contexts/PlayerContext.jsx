import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props)=> {

    const audioRef= useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    
    const [track,setTrack] = useState(songsData[0]);
    const [playerStatus,setPlayerStatus] = useState(false);
    const [time,setTime]= useState({
        currentTime:{
            secound:0,
            minute:0
        },
        totalTime:{
            secound:0,
            minute:0
        }
    })

    const play=()=>{
        audioRef.current.play();
        setPlayerStatus(true);
    }
    const pause =()=>{
        audioRef.current.pause();
        setPlayerStatus(false);

           
    }
    const playWithId = async (id)=>{
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayerStatus(true);
}
    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate=()=>{
                seekBar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"
                setTime({
                    currentTime:{
                        secound:Math.floor(audioRef.current.currentTime%60),
                        minute:Math.floor(audioRef.current.currentTime/60)
                    },
                    totalTime:{
                        secound:Math.floor(audioRef.current.duration%60),
                        minute:Math.floor(audioRef.current.duration/60)
                    }}
                )
            }
        },1000);
    },[audioRef])


 

    const contextValue ={
            audioRef,
             seekBg,
             seekBar,
             track,
             setTrack, 
             time,playerStatus,setPlayerStatus,setTime,
             play,pause,playWithId

    }
    return (

        <PlayerContext.Provider  value= {contextValue}>
        {props.children}
        </PlayerContext.Provider>
    )
}


export default PlayerContextProvider ;