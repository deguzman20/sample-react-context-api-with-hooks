import React, { useState, useEffect } from 'react';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [age, setAge] = useState(20);
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darness', id: 3}
  ]);

  const addSong = (title) => {
    setSongs([...songs, { title: title, id: 4}])
  }

  useEffect(()=> {
  	console.log('------------------------');
    console.log(songs);
    console.log('------------------------');
  },[age]);

  return(
   <div className="song-list">
     <ul>
     	{songs.map( song => {
     		return(<li>{song.title}</li>)
     	})}
     </ul>
     <NewSongForm addSong={addSong}/>
     <button type="button" 
             onClick={()=> setAge(age + 1)}>
     Add age to age : {age}
     </button>
   </div>
  );
}

export default SongList;