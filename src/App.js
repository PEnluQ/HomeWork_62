import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import './App.css';
import Home from "./containers/Home/Home";
import MySuitcase from "./containers/MySuitcase/MySuitcase";
import Contacts from "./containers/Contacts/Contacts";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/suitcase' exact component={MySuitcase}/>
          <Route path='/contacts' exact component={Contacts}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
