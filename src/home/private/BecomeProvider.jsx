import React from 'react'
import NavBarDashbord from './NavBarDashbord'

const BecomeProvider = () => {
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
                <h4><i className="ti-id-badge" />Add additional infos to become a service provider</h4>
              </div>
              <div className="dashboard-caption-wrap">
                {/* row */}
                <div className="row mrg-top-20">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label>Profile Photo</label>
                      <input type="file" className="form-control"  />
                    </div>	
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label>Service</label>
                      <input type="text" className="form-control" placeholder="designing@themezhub.com" />
                    </div>	
                  </div>
                
                </div>
              
              <br />
               
                <button type="submit" className="btn-savepreview"><i className="ti-angle-double-right" />Update Changes</button>
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

export default BecomeProvider
