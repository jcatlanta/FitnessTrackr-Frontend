import React, {useState,useEffect} from 'react'
import './App.css';
import SignUp from './Components/signup';
import Login from './Components/login';
import UserMe from './Components/UserMe';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Welcome to FitnessTracker</h1>
        <SignUp/>
        <Login/>
        <UserMe/>
      </div>

    </div>
  );
}

export default App;
