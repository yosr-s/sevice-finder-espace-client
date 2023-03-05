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
        <div className="col-lg-3 col-md-4">
          <div className="side-dashboard">
            <div className="dashboard-avatar">
              <div className="dashboard-avatar-thumb">
                <img src="assets/img/can-2.png" className="img-avater" alt />
              </div>
              <div className="dashboard-avatar-text">
                <h4>Shaurya Preet</h4>
                <span>Zivara Technoloty</span>
              </div>
            </div>
           <NavBarDashbord/>
          </div>
        </div>
        {/* Content Wrap */}
        <div className="col-lg-9 col-md-8">
          <div className="dashboard-body">
            <div className="dashboard-caption">
              <div className="dashboard-caption-header">
                <h4><i className="ti-id-badge" />My Profile</h4>
              </div>
              <div className="dashboard-caption-wrap">
                {/* row */}
                <div className="row mrg-top-20">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Fulle Name*</label>
                      <input type="text" className="form-control" placeholder="Enter Name" />
                    </div>	
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="designing@themezhub.com" />
                    </div>	
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="text" className="form-control" placeholder="91 256 254 4578" />
                    </div>	
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Birthday</label>
                      <input type="text" id="birthday" data-lang="en" data-large-mode="true" data-min-year={2017} data-max-year={2020} data-disabled-days="08/17/2017,08/18/2017" data-id="datedropper-0" data-theme="my-style" className="form-control" readOnly />
                    </div>	
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Headlines*</label>
                      <input type="text" className="form-control" placeholder="Enter Headlines" />
                    </div>	
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Gender</label>
                      <select id="jb-level" className="form-control">
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>	
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label>About Info</label>
                      <textarea className="form-control textarea" placeholder="About Company" defaultValue={""} />
                    </div>	
                  </div>
                </div>
                {/* row */}
                <div className="row mrg-top-30">
                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <h4>Job Loation &amp; Map</h4>
                    </div>	
                  </div>
                </div>
                {/* row */}
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label>Address*</label>
                      <input type="text" className="form-control" placeholder="Ex. 502, Sector 20 C, Mohali" />
                    </div>	
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <div id="singleMap" data-latitude="40.7427837" data-longitude="-73.11445617675781" data-maptitle="Our Location" />
                    </div>	
                  </div>
                </div>
                {/* row */}
                <div className="row mrg-top-30">
                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <h4>Social Accounts</h4>
                    </div>	
                  </div>
                </div>
                {/* row */}
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Facebook</label>
                      <input type="text" className="form-control" placeholder="Ex. 502, Sector 20 C, Mohali" />
                    </div>	
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Twitter</label>
                      <input type="text" className="form-control" />
                    </div>	
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Google Plus</label>
                      <input type="text" className="form-control" />
                    </div>	
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Youtube</label>
                      <input type="text" className="form-control" />
                    </div>	
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Vimeo</label>
                      <input type="text" className="form-control" />
                    </div>	
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Linkedin</label>
                      <input type="text" className="form-control" />
                    </div>	
                  </div>
                </div>
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
