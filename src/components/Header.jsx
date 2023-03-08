import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import UserService from '../service/UserService'

const Header = () => {
  const navigate = useNavigate()
  let log=localStorage.getItem('client_id')
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

  useEffect(() => {
  }, [log])
    return (
        <>
         <nav className="navbar navbar-default  navbar-fixed  white bootsnav">
        
        <div className="container">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu"><i className="fa fa-bars" /></button>
          <div className="navbar-header">
            <a className="navbar-brand" href="index.html"><img src="assets/img/logo-white.png" className="logo logo-display" alt /><img src="assets/img/logo-white.png" className="logo logo-scrolled" alt /></a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
          {localStorage.getItem('client_id') != null ?
            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
              <li><Link to="" onClick={(e)=>{onSubmitHandler()}} ><i className="fa fa-sign-in" />Sign Out</Link></li>
              <li className="left-br"><Link to="/dashbord" className="signin">Dashboard</Link></li>
            </ul>
            :
            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
              <li><Link to="/register"><i className="fa fa-pencil" aria-hidden="true" />Register</Link></li>
              <li className="left-br"><Link to="login" className="signin">Login Now</Link></li>
            </ul>
          }

            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
              <li className="">
                <Link to="/" className="" data-toggle="">Home</Link>
               
              </li>
              <li className="dropdown megamenu-fw"><Link to="/about" className="" data-toggle="">about</Link>
               
               </li>
              <li className="">
                <Link to="/projects" className="" data-toggle="">Projects</Link>
               
              </li>
              <li className="dropdown megamenu-fw"><Link to="/profiles" className="" data-toggle="">Profiles</Link>
               
              </li>
              <li className="dropdown megamenu-fw"><Link to="/contact" className="" data-toggle="">Contact us</Link>
               
               </li>
             
            </ul>
          </div>
        </div>
      </nav>
      
            
        </>
    )
}

export default Header
