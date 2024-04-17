import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';
import { Routes, Route } from'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import {useState} from'react';

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(true);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route  path="/" element={<Home/>}> </Route>
        <Route  path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}> </Route>
        <Route  path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}> </Route>
        <Route  path="/dashboard" element={<Dashboard/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
