import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream
=======
import SignUp from './Components/signup';
import Login from './Components/login';
import UserMe from './Components/UserMe';
import GetUsersRoutines from './Components/UsersRoutine';
import GetActivities from './Components/getActivities';
import LogOut from './Components/LogOut';
import GetRoutines from './Components/getAllRoutines';
import { Route, BrowserRouter, Link, Routes } from 'react-router-dom';
import PostActivitie from './Components/postActivities';
import PostRoutines from './Components/postRoutines';
import ActIdRoutine from './Components/activityIdByRoutine';
>>>>>>> Stashed changes

// import SinglePost from './components/SinglePost'
function App() {
  const [token,setToken] = useState(localStorage.getItem('replyToken'))
<<<<<<< Updated upstream
   
  
=======

>>>>>>> Stashed changes

  

  return (
<<<<<<< Updated upstream
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
    
      <div className="App">
        <div>
          <ul className="links">
          <li><Link to='/signup'>SignUp</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/getactivities'>Activities</Link></li>
          <li><Link to='/getroutines'>Routines</Link></li>
          {(token)? <li><Link to='/postactivitie'>Create Activity</Link></li>:null}
          {(token)?<li><Link to='/postroutines'>Create Routine</Link></li>:null}
          <li><Link to='/userme'>TestGetMe</Link></li>
          <li><Link to='/getusersroutines'>Test Get User Routines</Link></li>


    
          </ul>
          {(token) ?<LogOut/> :null}
          
        </div>
        <h1>Welcome to FitnessTracker</h1>
        <div className='test'>
          <Routes>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login setToken={setToken}/>}/>
          <Route path='/getactivities' element={<GetActivities/>}/>
          <Route path='/getroutines' element={<GetRoutines/>}/>
          <Route path='/postactivitie' element={<PostActivitie/>}/>
          <Route path='/postroutines' element={<PostRoutines/>}/>
          <Route path='/userme' element={<UserMe/>}/>
          <Route path='/getusersroutines' element={<GetUsersRoutines/>}/>

          </Routes>

          
 
     

          </div> 
      </div>
    
>>>>>>> Stashed changes
  );
}


export default App;