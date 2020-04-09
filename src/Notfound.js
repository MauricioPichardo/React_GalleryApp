
import React from 'react';
import './index.css';
import './App.css';
import FormSearch from './Form';



const NotFound = props =>{


  return(
    <div>
      <FormSearch/>
      <h1>Page Does Not Exist</h1>
      <h3>Try a new search</h3>
    </div>
  )

}


export default NotFound;
