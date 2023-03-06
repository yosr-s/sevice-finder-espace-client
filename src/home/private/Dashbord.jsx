import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CustomerService from '../../service/CustomerService'
import NavBarDashbord from './NavBarDashbord'

const Dashbord = () => {
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
       <div>
  <div className="clearfix" />
  {/* General Detail Start */}
  <section className="dashboard-wrap">
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Wrap */}
        <NavBarDashbord/>

        {/* Content Wrap */}
        <div className="col-lg-9 col-md-8">
          <div className="dashboard-body">
            <div className="dashboard-caption">
              <div className="dashboard-caption-header">
                <h4><i className="ti-settings" />Dashboard</h4>
              </div>
              <div className="dashboard-caption-wrap">
                {/* Overview */}
                {Data && Data.infos && Data.infos.service && Data.infos.image && Data.infos.service.nom  && (
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="dashboard-stat widget-1">
                      <div className="dashboard-stat-content"><h4>{Data.projects.length}</h4> <span>Projects Posted</span></div>
                      <div className="dashboard-stat-icon"><i className="ti-location-pin" /></div>
                    </div>	
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="dashboard-stat widget-2">
                      <div className="dashboard-stat-content"><h4>{Data.reviews.length}</h4> <span>Reviews</span></div>
                      <div className="dashboard-stat-icon"><i className="ti-layers" /></div>
                    </div>	
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="dashboard-stat widget-3">
                      <div className="dashboard-stat-content"><h4>{Data.messages.length}</h4> <span>Messages</span></div>
                      <div className="dashboard-stat-icon"><i className="ti-pie-chart" /></div>
                    </div>	
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="dashboard-stat widget-4">
                      <div className="dashboard-stat-content"><h4>1</h4> <span>Service</span></div>
                      <div className="dashboard-stat-icon"><i className="ti-bookmark" /></div>
                    </div>	
                  </div>
                </div>
                 )}
                {/* Notifications */}
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="dashboard-gravity-list with-icons">
                      <h4>Your Dashboard</h4>
                      <ul>
                        <li>
                          <i className="dash-icon-box ti-layers" /> <strong><Link to="/addinfos">Add a service you provide and become one of us!</Link></strong> 
                          <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                        </li>
                        <li>
                          <i className="dash-icon-box ti-star" />  <strong><Link to="/post">Post a project of yours!</Link></strong> 
                          <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                        </li>
                        <li>
                          <i className="dash-icon-box ti-heart" />  <strong><Link to="/editprofile">Edit your profile information!</Link></strong> 
                          <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                        </li>
                       
                        <li>
                          <i className="dash-icon-box ti-heart" /> <strong><Link to="/messages">View the messages you got! </Link></strong>
                          <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                        </li>
                      
                      </ul>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* General Detail End */}
  {/* ============================ Call To Action ================================== */}
  <section className="theme-bg call-to-act-wrap">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="call-to-act">
            <div className="call-to-act-head">
              <h3>Want to Become a Success Employers?</h3>
              <span>We'll help you to grow your career and growth.</span>
            </div>
            <a href="#" className="btn btn-call-to-act">SignUp Today</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ============================ Call To Action End ================================== */}
  {/* ============================ Before Footer ================================== */}
 
</div>

            
        </>
    )
}

export default Dashbord
