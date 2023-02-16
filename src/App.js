import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Profile from './components/Profile';
// import Posts from './components/Posts.jsx';
import Navbar from './components/Navbar';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';

// import SinglePost from './components/SinglePost'
function App() {
  return (
    <div className="App">
   <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        {/* <Route path="posts" element={<Posts />} /> */}
        {/* <Route path="/posts/:id" element={<SinglePost/>} /> */}
        <Route path="navbar" element = {<Navbar />}/>
        <Route path="signup" element = {<Signup />}/>
        <Route path="login" element = {<Login />}/>
      </Routes>        
 
    </div>
  );
}


export default App;