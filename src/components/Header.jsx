import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
         <nav className="navbar navbar-default  navbar-fixed  white bootsnav">
        
        <div className="container">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu"><i className="fa fa-bars" /></button>
          <div className="navbar-header">
            <a className="navbar-brand" href="index.html"><img src="assets/img/logo-white.png" className="logo logo-display" alt /><img src="assets/img/logo-white.png" className="logo logo-scrolled" alt /></a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
              <li><a href="login.html"><i className="fa fa-pencil" aria-hidden="true" />SignUp</a></li>
              <li className="left-br"><a href="javascript:void(0)" data-toggle="modal" data-target="#signup" className="signin">Sign In Now</a></li>
            </ul>
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
             
            </ul>
          </div>
        </div>
      </nav>
      
            
        </>
    )
}

export default Header
