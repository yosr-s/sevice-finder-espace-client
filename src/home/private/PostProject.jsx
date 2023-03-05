import React from 'react'
import NavBarDashbord from './NavBarDashbord'

const PostProject = () => {
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
                <h4><i className="ti-ruler-pencil" />Post New Page</h4>
              </div>
              <div className="dashboard-caption-wrap">
                <form className="post-form">
                  {/* row */}
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Job Title*</label>
                        <input type="text" className="form-control" placeholder="Enter Title" />
                      </div>	
                    </div>
                  </div>
                  {/* row */}
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Job Description</label>
                        <textarea className="form-control about height-120" placeholder="About Company" defaultValue={""} />
                      </div>	
                    </div>
                  </div>
                  {/* row */}
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Job Category*</label>
                        <select id="jb-category" className="form-control">
                          <option>Choose Category</option>
                          <option>Accounting Assistant</option>
                          <option>Arts, Design, Media</option>
                          <option>Charity &amp; Voluntary</option>
                          <option>Education &amp; Coachs</option>
                          <option>Finance And Business</option>
                          <option>IT &amp; Computer</option>
                          <option>Banking</option>
                        </select>
                      </div>	
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Job Type*</label>
                        <select id="jb-type" className="form-control">
                          <option>Job Type</option>
                          <option>Contract</option>
                          <option>Full-Time</option>
                          <option>Part-time</option>
                          <option>Temporary</option>
                          <option>Freelancer</option>
                        </select>
                      </div>	
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Job Level*</label>
                        <select id="jb-level" className="form-control">
                          <option>Job Level</option>
                          <option>Junior</option>
                          <option>Manager</option>
                          <option>Senior</option>
                        </select>
                      </div>	
                    </div>
                  </div>
                  {/* row */}
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Salary From</label>
                        <input type="text" className="form-control" placeholder="Enter Salary From" />
                      </div>	
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Salary To</label>
                        <input type="text" className="form-control" placeholder="Enter Salary To" />
                      </div>	
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Salary Postfix</label>
                        <input type="text" className="form-control" placeholder="EX. Month" />
                      </div>	
                    </div>
                  </div>
                  {/* row */}
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Language</label>
                        <select className="language form-control" name="skills[]" multiple="multiple">
                          <option>Afrikanns</option>
                          <option>Albanian</option>
                          <option>English</option>
                          <option>Estonian</option>
                          <option>Georgian</option>
                          <option>French</option>
                          <option>German</option>
                        </select>
                      </div>	
                    </div>
                  </div>
                  {/* row */}
                  <div className="row mrg-top-30">
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <h4>Application Settings</h4>
                      </div>	
                    </div>
                  </div>
                  {/* row */}
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Custom Job URL</label>
                        <input type="text" className="form-control" placeholder="https://site.com/custom-url/" />
                      </div>	
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Email For Applications</label>
                        <input type="text" className="form-control" placeholder="Ex.myapplicat@gmail.com" />
                      </div>	
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Deadline Submission</label>
                        <input type="text" id="expirejob" data-lang="en" data-large-mode="true" data-min-year={2017} data-max-year={2020} data-disabled-days="08/17/2017,08/18/2017" data-id="datedropper-0" data-theme="my-style" className="form-control" readOnly />
                      </div>	
                    </div>
                  </div>
                  {/* row */}
                  <div className="row mrg-top-30">
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <h4>Required Skills</h4>
                      </div>	
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <select className="multiple-skill form-control" name="skills[]" multiple="multiple">
                          <option>HTML5</option>
                          <option>Css3</option>
                          <option>Photoshop</option>
                          <option>Php</option>
                          <option>Wordpress</option>
                          <option>Bootstrap</option>
                          <option>Magento</option>
                        </select>
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
                      <div className="form-group text-center">
                        <button type="submit" className="btn-savepreview"><i className="ti-angle-double-right" />Publish &amp; Preview</button>
                      </div>	
                    </div>
                  </div>
                </form>
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

export default PostProject
