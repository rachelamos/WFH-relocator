import React from 'react';
import Chart from './components/Rechart/Rechart';
import Nav from './components/Navbar';
import Login from './components/Auth/Loginpage'
import Signup from './components/Auth/Signup'

function App () {
  return (
    <div>
      <Nav></Nav>
      <Chart></Chart>
    </div>
  )
}

export default App;