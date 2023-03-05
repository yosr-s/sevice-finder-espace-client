import React from 'react'
import NavBarDashbord from './NavBarDashbord'

const Messages = () => {
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
                <h4><i className="ti-wallet" />Packages</h4>
              </div>
              <div className="dashboard-caption-wrap">
                <div className="table-responsive">
                  <table className="table table-responsive">
                    <thead>
                      <tr>
                        <th scope="col">Select</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Jobs</th>
                        <th scope="col">Feature Jobs</th>
                        <th scope="col">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <label className="custom-radio">
                            <input type="radio" defaultChecked="checked" name="package" />
                            <span className="checkmark" />
                          </label>
                        </th>
                        <td>Free</td>
                        <td>$00</td>
                        <td>10</td>
                        <td>0</td>
                        <td>10 Days</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <label className="custom-radio">
                            <input type="radio" defaultChecked="checked" name="package" />
                            <span className="checkmark" />
                          </label>
                        </th>
                        <td>Basic</td>
                        <td>$49</td>
                        <td>30</td>
                        <td>5</td>
                        <td>15 Days</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <label className="custom-radio">
                            <input type="radio" defaultChecked="checked" name="package" />
                            <span className="checkmark" />
                          </label>
                        </th>
                        <td>Premium</td>
                        <td>$99</td>
                        <td>49</td>
                        <td>10</td>
                        <td>20 Days</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <label className="custom-radio">
                            <input type="radio" defaultChecked="checked" name="package" />
                            <span className="checkmark" />
                          </label>
                        </th>
                        <td>Advance</td>
                        <td>$199</td>
                        <td>100</td>
                        <td>20</td>
                        <td>30 Days</td>
                      </tr>
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
