
import React from 'react';
import './index.css';
import './App.css';
import Photo from './Photo'



const Photolist = props =>{
  const results = props.data.photos;
  const title= props.data.queried;
  let photos =  results.map( photo =>(
  <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} key={photo.id} />
)
);

  return(
    <div>
    <h3>{title}</h3>
      <ul className="App-Container" >
        {photos}
        </ul>
    </div>
  )

}


export default Photolist;
