import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'


const Layout = () => {
    return (
        <>
     <div>
  <div className="Loader" />
  <div className="wrapper">
   <Header/>
   <Outlet></Outlet>
    {/* ============================ Call To Action End ================================== */}
    {/* ============================ Before Footer ================================== */}
 <Footer/>
  </div>
</div>

            
        </>
    )
}

export default Layout
