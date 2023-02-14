import React, {useState,useEffect} from 'react'
import './App.css';
import SignUp from './Components/signup';
import Login from './Components/login';
import UserMe from './Components/UserMe';
import GetUsersRoutines from './Components/UsersRoutine';
import GetActivities from './Components/getActivities';
import LogOut from './Components/LogOut';
import GetRoutines from './Components/getAllRoutines';

function App() {
  // const [token,setToken] = useState(localStorage.getItem("replyToken"))

  return (
    <div className="App">
      <div>
        <h1>Welcome to FitnessTracker</h1>
        <SignUp/>
        <Login/>
        <UserMe/>
        <GetUsersRoutines/>
        <GetActivities/>
        <GetRoutines/>
        {/* {(token) ?<LogOut/> :null} */}
        
      </div>

    </div>
  );
}

export default App;
