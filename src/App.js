import React, {Component} from 'react';
import axios from 'axios';

import Naver from './Naver.js'
import Photolist from './Photolist';
import './index.css';
import './App.css';
import FormSearch from './Form'


//Creates Main Component and Initiates Searches based off Search or Route
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      photos: [],
      ids:[],
      queried: props.match.params.query
    };
  }

//Search Based off Route
componentDidMount(){
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=79a5ec77c5886232d59a44600b628002&tags=${this.state.queried}&accuracy=~11&format=json&nojsoncallback=1&per_page=24&page=1`)
        .then(responseData=>  responseData.data.photos.photo)
        .then(data => data.map( photo =>
              `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg` ))
        .then( data =>
                  this.setState({
                      photos: data
                  })

              )
        .catch( error => console.log("Error Occured" + error) )
    }

//Search Based off Search Box
  performSearch = (query) =>{
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=79a5ec77c5886232d59a44600b628002&tags=${query}&accuracy=~11&format=json&nojsoncallback=1&per_page=24&page=1`)
        .then(responseData=>  responseData.data.photos.photo)
        .then(data => data.map( photo =>
              `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg` ))
        .then( data =>
                  this.setState({
                      photos: data
                  })
              )
        .catch( error => console.log("Error Occured" + error) )
    }




render() {
  return (
      <div className="container">
        <FormSearch onSearch={this.performSearch}/>
        <div className="naver">
          <Naver />
        </div>
        <div className="photo-container">
          <Photolist data={this.state}/>
        </div>
      </div>

  );
}
}

export default App;
