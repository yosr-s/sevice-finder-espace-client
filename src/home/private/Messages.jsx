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
                <div className="table-responsive">
                  <table className="table table-responsive">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Sujet</th>
                        <th scope="col">Message</th>
                      </tr>
                    </thead>
                    <tbody>

                   {Data.messages?.map((item,index)=>{
     return(
                      <tr>
                       <td>{index}</td>
                        <td>{item.customer.name}</td>
                        <td>{item.customer.email}</td>
                        <td>{item.customer.mobile}</td>
                        <td>{item.sujet}</td>
                        <td>{item.message}</td>
                      </tr>
                         )
                        })}
                
                    </tbody>
                  </table>
                </div>
                <button type="submit" className="btn-savepreview"><i className="ti-angle-double-right" />Continue</button>
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
