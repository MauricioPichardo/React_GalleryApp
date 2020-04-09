import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';
import './App.css';

import {BrowserRouter,
        Route, Switch} from 'react-router-dom';
import NotFound from './Notfound';
import App from './App'


class Router extends Component {
// Binds History
constructor(props) {
      super(props);
      this.handleNext = this.handleNext.bind(this);
      this.handleBack = this.handleBack.bind(this);
  }

// Forwarded in Browser
handleNext() {
    this.props.history.push('/');
  }
// Go Back in Browser
  handleBack() {
    this.props.history.push('/');
  }

// Defines what is to be routed
render(){
  return (
  <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/:query" component={App}  />
            <Route component={NotFound}/>
          </Switch>
  </BrowserRouter>
  );
}
}

//Actual Rending of App
ReactDOM.render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
    document.getElementById('root')

);


serviceWorker.unregister();
