import React from 'react';
import './index.css';
import './App.css';
import { Link} from 'react-router-dom';

class Naver extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      searchText: ""
    }}



render() {

  return (
      <div className="naver">
          <Link  to={{
              pathname: "/sunsets"
            }}  value="sunsets" ><button onClick="location.href=location.href">Sunsets</button></Link>
          <Link to="/flowers"  value="sunsets"><button onClick="location.href=location.href">Flowers</button></Link>
          <Link to="/Birds"  value="sunsets" ><button onClick="location.href=location.href">Birds</button></Link>

      </div>
  );
}
}


export default Naver;
