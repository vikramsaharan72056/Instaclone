import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
 import LandingPage from './LandingPage/Landing_page';
 import PostView from './PostView/PostView';
import PostForm from './FormDetails';
import Navbar from './Navbar';
import Register from './Register';


function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element = {<LandingPage/>}></Route>
    <Route path="/allpost" element = {<PostView/>}></Route>
    <Route path="/addpost" element = {<PostForm/>}></Route>
    <Route path ="/register" element = { <Register/>}/> 
   </Routes>

   </>
  )
}

export default App;
