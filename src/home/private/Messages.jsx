import React, { useEffect, useState } from 'react'
import CustomerService from '../../service/CustomerService';
import NavBarDashbord from './NavBarDashbord'

const Messages = () => {
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
                <h4><i className="ti-wallet" />My Messages</h4>
              </div>
              <div className="dashboard-caption-wrap">
              <ul className="list">
      {Data.messages?.map((item,index)=>{
     return(
        <li className="manage-list-row clearfix col-md-12">
          <div className="job-info premium-job">
            <div className="job-img">
              <img src={"http://localhost:3000/file/"+item.customer.infos.image} className="attachment-thumbnail" alt="Academy Pro Theme" />
            </div>
            <div className="job-details">
              <h3 className="job-name">{item.sujet} <span className="cl-danger"></span></h3>
              <small className="job-company">{item.message}</small>
              <br />
              <small ><i className="ti-time" /><a href="#">{item.customer.name}</a></small>
              <br />
              <small ><i className="ti-email" /><a href="#">{item.customer.email}</a></small>
              <br />
              <small ><i className="ti-mobile" /><a href="#">{item.customer.mobile}</a></small>



              
            </div>
          </div>
          <div className="job-buttons">
            <a href="#" className="btn btn-cancel manage-btn" data-toggle="tooltip" data-placement="top" title data-original-title="Remove"><i className="ti-close" /></a>
          </div>
        </li>
           )
          })}
 
</ul>
               
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
</div>

            
        </>
    )
}

export default Messages
