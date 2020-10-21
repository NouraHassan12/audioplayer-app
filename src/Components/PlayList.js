import React, { useContext } from 'react'
import playerContext from '../Context/playerContext';


function Playlist() {
  const { SetCurrent, currentSong, songs } = useContext(playerContext)


  const filteredData = songs
  const DeleteSong=()=>{
    songs.filter((song,i) => song.i !== i)
  }


  const handleSearchChange = e => {
    const { value } = e.target;
    const lowercasedValue = value.toLowerCase();

      const filteredData = songs.filter(songs =>
        songs[0].toLowerCase().includes(lowercasedValue)
      );
      console.log(filteredData,"data")
      return { filteredData };
  
  };


  return (
    <div className="playlist">
      <div className="header">
     
        <i className="fas fa-list-ul"></i>
        <span className="pltext">Play List</span>
      </div>
      <div class="form-group">
      <div className="container form"> 
     <h4>search:</h4>
        <input
        className="form-control"
          className="input"
          onChange={handleSearchChange}
         
          type="text"
        
          placeholder="Search your track"
        />
      </div>
    </div>
      <ul className="loi list-group">
        {filteredData.map((song, i) => (
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
