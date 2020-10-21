// import React from "react";
// import { useState , useContext} from "react";
// import playerContext from '../Context/playerContext'

// function Searchbar(props) {
//     const {  songs } = useContext(playerContext)
 

//     const handleSearchChange = e => {
//         const { value } = e.target;
//         const lowercasedValue = value.toLowerCase();
    
//           const filteredData = songs.filter(songs =>
//             songs[0].toLowerCase().includes(lowercasedValue)
//           );
//           console.log(filteredData,"data")
//           return { filteredData };
      
//       };
 


//   return (
//     <div class="form-group">
//       <div className="container form"> 
//      <h4>search:</h4>
//         <input
//         className="form-control"
//           className="input"
//           onChange={handleSearchChange}
         
//           type="text"
        
//           placeholder="Search your track"
//         />
//       </div>
//     </div>
//   );
// }

// export default Searchbar;