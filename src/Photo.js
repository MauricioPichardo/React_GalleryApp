
import React, {Component} from 'react';
import './App.css';


class Photo extends Component {
  constructor(props) {
    super(props);
    this.state={

    }}


render() {
  return(

  <li className="photo-wrap">
      <img src={this.props.url} alt="didn't load" />
  </li>
);
}}


export default Photo;
