import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CustomerService from '../../service/CustomerService'
import './NavBarDashbord.css' // Import the CSS file



const NavBarDashbord = () => {
    let id=localStorage.getItem('client_id')
  console.log("idddddddddddddd",id);
  const [Data, setData] = useState({});
  const getCustomerById=(id)=>{
    CustomerService.getOne(id)
    .then((res)=>{
        console.log("res.data",res.data)
        setData(res.data)
        console.log("data",Data)
    })
    .catch((err)=>{
        console.log(err)
    })
  };
  useEffect(() => {
    getCustomerById(id);
    
  },[]);
    return (
        <>
                <div className="col-lg-3 col-md-4">

          <div className="side-dashboard">

<div className="dashboard-avatar">
              <div className="dashboard-avatar-thumb">
              {Data.infos && Data.infos.image && (
                <img src={"http://localhost:3000/file/"+Data.infos.image} className="img-avater" alt />
                )}              </div>
              <div className="dashboard-avatar-text">
                <h4>Shaurya Preet</h4>
                <span>Zivara Technoloty</span>
              </div>
            </div>
       
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
            </div>
            </div>
            
        </>
    )
}

export default NavBarDashbord
