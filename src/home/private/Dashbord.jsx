import React from 'react'
import { Link } from 'react-router-dom'
import NavBarDashbord from './NavBarDashbord'

const Dashbord = () => {
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
                <h4><i className="ti-settings" />Dashboard</h4>
              </div>
              <div className="dashboard-caption-wrap">
                {/* Overview */}
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="dashboard-stat widget-1">
                      <div className="dashboard-stat-content"><h4>210</h4> <span>Job Posted</span></div>
                      <div className="dashboard-stat-icon"><i className="ti-location-pin" /></div>
                    </div>	
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="dashboard-stat widget-2">
                      <div className="dashboard-stat-content"><h4>80</h4> <span>Pending Jobs</span></div>
                      <div className="dashboard-stat-icon"><i className="ti-layers" /></div>
                    </div>	
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="dashboard-stat widget-3">
                      <div className="dashboard-stat-content"><h4>712</h4> <span>Total Views</span></div>
                      <div className="dashboard-stat-icon"><i className="ti-pie-chart" /></div>
                    </div>	
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="dashboard-stat widget-4">
                      <div className="dashboard-stat-content"><h4>107</h4> <span>Expire Jobs</span></div>
                      <div className="dashboard-stat-icon"><i className="ti-bookmark" /></div>
                    </div>	
                  </div>
                </div>
                {/* Notifications */}
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="dashboard-gravity-list with-icons">
                      <h4>Recent Activities</h4>
                      <ul>
                        <li>
                          <i className="dash-icon-box ti-layers" /> Your job <strong><a href="#">App Developer</a></strong> has been approved!
                          <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                        </li>
                        <li>
                          <i className="dash-icon-box ti-star" /> Your job <strong><a href="#">Android Developer</a></strong> expire soon!
                          <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                        </li>
                        <li>
                          <i className="dash-icon-box ti-heart" /> Someone bookmarked your <strong><a href="#">Web Designer</a></strong> job!
                          <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                        </li>
                        <li>
                          <i className="dash-icon-box ti-star" /> Gracie Mahmood left a review <div className="numerical-rating mid" data-rating="3.8" /> on <strong><a href="#">Sonal Cafe</a></strong>
                          <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                        </li>
                        <li>
                          <i className="dash-icon-box ti-heart" /> Your job <strong><a href="#">UI/UX Designer</a></strong> has been approved!
                          <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                        </li>
                        <li>
                          <i className="dash-icon-box ti-heart" /> Someone bookmarked your <strong><a href="#">PHP Developer</a></strong> job!
                          <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                        </li>
                        <li>
                          <i className="dash-icon-box ti-star" /> Your job <strong><a href="#">Software Developer</a></strong> expire soon!
                          <a href="#" className="close-list-item"><i className="fa fa-close" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="dashboard-gravity-list invoices with-icons">
                      <h4>Invoices</h4>
                      <ul>
                        <li><i className="dash-icon-box ti-files" />
                          <strong>Starter Plan</strong>
                          <ul>
                            <li className="unpaid">Unpaid</li>
                            <li>Order: #20551</li>
                            <li>Date: 01/08/2019</li>
                          </ul>
                          <div className="buttons-to-right">
                            <a href="#" className="button gray">View Invoice</a>
                          </div>
                        </li>
                        <li><i className="dash-icon-box ti-files" />
                          <strong>Basic Plan</strong>
                          <ul>
                            <li className="paid">Paid</li>
                            <li>Order: #20550</li>
                            <li>Date: 01/07/2019</li>
                          </ul>
                          <div className="buttons-to-right">
                            <a href="#" className="button gray">View Invoice</a>
                          </div>
                        </li>
                        <li><i className="dash-icon-box ti-files" />
                          <strong>Extended Plan</strong>
                          <ul>
                            <li className="paid">Paid</li>
                            <li>Order: #20549</li>
                            <li>Date: 01/06/2019</li>
                          </ul>
                          <div className="buttons-to-right">
                            <a href="#" className="button gray">View Invoice</a>
                          </div>
                        </li>
                        <li><i className="dash-icon-box ti-files" />
                          <strong>Platinum Plan</strong>
                          <ul>
                            <li className="paid">Paid</li>
                            <li>Order: #20548</li>
                            <li>Date: 01/05/2019</li>
                          </ul>
                          <div className="buttons-to-right">
                            <a href="#" className="button gray">View Invoice</a>
                          </div>
                        </li>
                        <li><i className="dash-icon-box ti-files" />
                          <strong>Extended Plan</strong>
                          <ul>
                            <li className="paid">Paid</li>
                            <li>Order: #20547</li>
                            <li>Date: 01/04/2019</li>
                          </ul>
                          <div className="buttons-to-right">
                            <a href="#" className="button gray">View Invoice</a>
                          </div>
                        </li>
                        <li><i className="dash-icon-box ti-files" />
                          <strong>Platinum Plan</strong>
                          <ul>
                            <li className="paid">Paid</li>
                            <li>Order: #20546</li>
                            <li>Date: 01/03/2019</li>
                          </ul>
                          <div className="buttons-to-right">
                            <a href="#" className="button gray">View Invoice</a>
                          </div>
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
