
import React from 'react';
import './index.css';
import './App.css';
import Photo from './Photo'



const Photolist = props =>{
  const results = props.data.photos;
  let photos =  results.map( photo =>(
  <Photo url={photo} key={photo} />
)
);

  return(
    <ul className="App-Container">
      {photos}
    </ul>
  )

}


export default Photolist;
