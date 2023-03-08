import React, { useEffect, useState } from 'react'
import { Link, NavLink ,useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import CustomerService from '../../service/CustomerService'
import UserService from '../../service/UserService'
import './NavBarDashbord.css' // Import the CSS file



const NavBarDashbord = () => {

  const navigate = useNavigate()
  const onSubmitHandler = () => {
    Swal.fire({
      title: 'Are you sure to logout?',
      showDenyButton: true,
      showCancelButton: true,
      confirmedText: 'Yes',
      denyButtonText: `No`,
    }).then((result)=>{
      if (result.isConfirmed){
        UserService.logout()
        .then((res)=>{
          console.log(res)
        });
        localStorage.clear("user");
        localStorage.clear("token");
        localStorage.clear("refreshToken");
        navigate("/login");
        
      }else if(result.isDenied){
        Swal.fire('not')
      }
    });
  };
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
              {Data.infos && Data.infos.image  && Data.infos.service && Data.infos.service.nom &&(
                <img src={"http://localhost:3000/file/"+Data.infos.image} className="img-avater" alt />
                )}              </div>
              <div className="dashboard-avatar-text">
                <h4>{Data.name}</h4>
                <span></span>
              </div>
            </div>
       
         <div className="dashboard-menu">
         <ul>
  <li><NavLink exact to="/dashbord" activeClassName="active"><i className="ti-dashboard" />Dashboard</NavLink></li>
  <li><NavLink to="/post" activeClassName="active"><i className="ti-ruler-pencil" />Post New Project</NavLink></li>
  <li><NavLink to="/addinfos" activeClassName="active"><i className="ti-briefcase" />Become a service provider</NavLink></li>
  <li><NavLink to="/editprofile"><i className="ti-id-badge" />Edit Profile</NavLink></li>
  <li><NavLink to="/messages"><i className="ti-user" />Messages</NavLink></li>
  <li><Link to="/"  onClick={(e)=>{onSubmitHandler()}}><i className="ti-power-off" />Logout</Link></li>
</ul>

             
            </div>
            </div>
            </div>
            
        </>
    )
}

export default NavBarDashbord
