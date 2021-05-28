import './App.css';
import React from 'react';
import { BrowserRouter as  Router, Route, Switch} from 'react-router-dom'
import Nav from './Components/Nav';
import Login from './Components/Login';
import Team from './Components/Team';
import Home from './Components/Home';




function App() {
  
  return (
    <div className="container-fluid text-center">       
      <Router>
        <Nav></Nav>
        <Switch>          
          <Route path="/login" component={Login}></Route>
          <Route exact path="/team" component={Team}></Route>
          <Route path="/home" component={Home}></Route>
        </Switch>
      </Router>     
    </div>
  );
}

export default App;
