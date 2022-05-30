import React, {useState} from 'react';

import MyAudio from "./MyAudio";

function Playlist () {

  const [isShow,setShow] = useState (false);

  const handleClick = evt =>{
    setShow(!isShow);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
    
      {isShow ?
        <div>          
          <MyAudio></MyAudio>
          <MyAudio></MyAudio>
          <MyAudio></MyAudio>
        </div>
        :
        <></>
      }
    </div>
  );
};

export default Playlist;
