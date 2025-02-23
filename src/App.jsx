import { useContext, useState } from 'react'


import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import Display from './Components/Display'
import { PlayerContext } from './Contexts/PlayerContext'

function App() {

  const {audioRef,track} = useContext(PlayerContext)
  
  return (
    <div className='h-screen bg-orange-300' >
      <div  className='h-[90%] flex'>
        <Sidebar/>
       <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
