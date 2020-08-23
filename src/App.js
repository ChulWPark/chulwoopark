import React from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Profile } from './Profile';
import { Career } from './Career';
import { Education } from './Education';
import { Project } from './Project';
import { NoMatch } from './NoMatch';


import NavigationBar from './components/NavigationBar';
import Sidebar from './components/Sidebar';
import Linkbar from './components/Linkbar';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route path="/career" component={Career} />
          <Route path="/education" component={Education} />
          <Route path="/project" component={Project} />
          <Route component={NoMatch} />
        </Switch>
        <Sidebar />
        <Linkbar />
      </Router>
    </React.Fragment>
  );
}

export default App;