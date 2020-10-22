import React, { useContext ,useState ,useEffect} from 'react'
import playerContext from '../Context/playerContext';
import { songsArr } from '../Context/songs';


function Playlist() {
  const { SetCurrent, currentSong , songs } = useContext(playerContext)

  const [searchTerm, setSearchTerm] = useState("");
  const [filterData, setSearchResults] = useState([]);

  





  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  
  };



  useEffect(() => {
    const results = songs.filter(song =>
      song[0].toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, ]);

  return (
    <div className="playlist">
      <div className="header">
     
        <i className="fas fa-list-ul"></i>
        <span className="pltext">Play List</span>
      </div>
       <div class="form-group">
      <div className="container form"> 
  
        <input
        className="form-control"
          className="input"
          onChange={handleSearchChange}
         value={searchTerm}
          type="text"
        
          placeholder="Search your track"
        />
      </div>
    </div> 
      <ul className="loi list-group">
        {filterData.map((song, i) => (
          <li
            className={' list-group-item songContainer ' + (currentSong === i ? 'selected' : '')}
            key={i}
            onClick={() => {
              SetCurrent(i)
            }}
          >
          
           <p className="song">  <i className="fas fa-music"></i>  {song[0]} -  {song[2]}
               </p>
           
       
        
          
            
           
           
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Playlist
