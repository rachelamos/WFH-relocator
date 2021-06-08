import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chart from './components/Rechart';
import Nav from './components/Navbar';
<<<<<<< HEAD
import Login from './components/Auth/Loginpage'
import Signup from './components/Auth/Signup'
=======
import Login from './pages/Login';
import SearchPage from './pages/SearchPage';
>>>>>>> 4051e13f30908d6c141ed5d0f5e486259b0e0bfc

function App () {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path={"/"}>
          <Login />
        </Route>
        <Route exact path={"/location"}>
          <SearchPage />
          <Chart />
        </Route>
      </Switch>
    </div>
    </Router>
  )
}

export default App;
