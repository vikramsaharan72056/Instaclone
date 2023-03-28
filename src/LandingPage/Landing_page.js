import React from 'react'
import { NavLink } from 'react-router-dom';

const Landing_page = () => {
  return (
    <div>
        <h2>Landing_page</h2>
       <NavLink to = "/allpost">
       <button>
          Let us see the posts
        </button>
        </NavLink> 
        </div>
  )
}

export default Landing_page