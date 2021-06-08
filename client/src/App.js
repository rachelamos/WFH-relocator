import React from 'react';
import Chart from './components/Rechart/Rechart';
import Nav from './components/Navbar';
import LoginPage from './components/Auth/loginpage'
import Signup from './components/Auth/Signup'
import Login from './pages/Login';
import SearchPage from './pages/SearchPage';

function App () {
  return (
    <div>
      <Nav></Nav>
      <Chart></Chart>
    </div>
  )
}

export default App;
