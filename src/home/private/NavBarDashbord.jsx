import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBarDashbord.css' // Import the CSS file



const NavBarDashbord = () => {
    return (
        <>
       
         <div className="dashboard-menu">
         <ul>
  <li><NavLink exact to="/dashbord" activeClassName="active"><i className="ti-dashboard" />Dashboard</NavLink></li>
  <li><NavLink to="/post" activeClassName="active"><i className="ti-ruler-pencil" />Post New Project</NavLink></li>
  <li><NavLink to="/addinfos" activeClassName="active"><i className="ti-briefcase" />Become a service provider</NavLink></li>
  <li><NavLink to="/editprofile"><i className="ti-id-badge" />Edit Profile</NavLink></li>
  <li><NavLink to="/messages"><i className="ti-user" />Messages</NavLink></li>
  <li><a href="login.html"><i className="ti-power-off" />Logout</a></li>
</ul>

             
            </div>
            
        </>
    )
}

export default NavBarDashbord
