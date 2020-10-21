import React, { useContext } from 'react'
import playerContext from '../Context/playerContext';


function Playlist() {
  const { SetCurrent, currentSong, songs } = useContext(playerContext)



  const DeleteSong=()=>{
    songs.filter((song,i) => song.i !== i)
  }

  return (
    <div className="playlist">
      <div className="header">
        <i className="fas fa-list-ul"></i>
        <span className="pltext">Play List</span>
      </div>
      <ul className="loi list-group">
        {songs.map((song, i) => (
          <li
            className={' list-group-item songContainer ' + (currentSong === i ? 'selected' : '')}
            key={i}
            onClick={() => {
              SetCurrent(i)
            }}
          >
          
           <p className="song">  <i className="fas fa-music"></i>  {song[0]} -  {song[2]}
               </p>
               <button className="deletebtn" onClick={
           DeleteSong(i)
            }>x</button>
       
        
          
            
           
           
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Playlist
