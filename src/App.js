import React, {useState,useEffect} from 'react'
import './App.css';
import SignUp from './Components/signup';
import Login from './Components/login';
import UserMe from './Components/UserMe';
import GetUsersRoutines from './Components/UsersRoutine';
import GetActivities from './Components/getActivities';
import LogOut from './Components/LogOut';
import GetRoutines from './Components/getAllRoutines';
import { Route, BrowserRouter, Link, Routes } from 'react-router-dom';
import PostActivitie from './Components/postActivities';

function App() {
  const [token,setToken] = useState(localStorage.getItem('replyToken'))

  return (
    
      <div className="App">
        <div>
          <ul className="links">
          <li><Link to='/signup'>SignUp</Link></li>
          <li><Link to='/login'>Login</Link></li>
    
          </ul>
          {(token) ?<LogOut/> :null}
          
        </div>
        <h1>Welcome to FitnessTracker</h1>
        <div className='test'>
          <Routes>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>

          </Routes>
          
          <PostActivitie />
          <UserMe/>
          <GetUsersRoutines/>
          <GetActivities/>
          <GetRoutines/>
          </div> 
      </div>
    
  );
}

export default App;
