import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
 import LandingPage from './LandingPage/Landing_page';
 import PostView from './PostView/PostView';
import PostForm from './FormDetails';
import Navbar from './Navbar';


function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element = {<LandingPage/>}></Route>
    <Route path="/allpost" element = {<PostView/>}></Route>
    <Route path="/addpost" element = {<PostForm/>}></Route>
   </Routes>

   </>
  )
}

export default App;
