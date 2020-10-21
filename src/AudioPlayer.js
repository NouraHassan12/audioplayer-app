import React from 'react'
import Header from './Components/Header'
import Playlist from './Components/PlayList'
import Controls from './Components/Controls'
import Searchbar from './Components/Search'
import PlayerState from './Context/playerState'

import './App.css';


function AudioPlayer() {
  return (
    <PlayerState>
      <div className="main">
        <Searchbar />
         <Controls />
        <div className="">

          <div className="">
            <Header />

          </div>
        
        </div>
        <div className="">

            <Playlist />
          </div>
      </div>
    </PlayerState>
  )
}

export default AudioPlayer
