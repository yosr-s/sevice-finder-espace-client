import React from 'react'

const Home = () => {
    return (
        <>
         <div className="clearfix" />
    <br />
    <br />
    <br />
    <div className="banner trans" style={{backgroundImage: 'url(assets/img/slider-1.jpg)'}} data-overlay={6}>
      <div className="container">
        <div className="banner-caption">
          <div className="col-md-12 col-sm-12 banner-text">
            <h1>7,000+ Browse Jobs</h1>
            <div className="full-search-2 eclip-search italian-search hero-search-radius">
              <div className="hero-search-content">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 small-padd b-r">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <input type="text" className="form-control" placeholder="Job Title or Keywords" />
                        <i className="ti-search" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 small-padd b-r">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <select id="choose-city" className="form-control">
                          <option>Choose City</option>
                          <option>Chandigarh</option>
                          <option>London</option>
                          <option>England</option>
                          <option>Pratapcity</option>
                          <option>Ukrain</option>
                          <option>Wilangana</option>
                        </select>
                        <i className="ti-location-pin" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 small-padd">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <select id="choose-category" className="form-control">
                          <option>Job Category</option>
                          <option>Education &amp; Trainee</option>
                          <option>Sales &amp; Marketing</option>
                          <option>Automotive Jobs</option>
                          <option>Health &amp; Medical</option>
                          <option>Design &amp; Development</option>
                          <option>Book Services</option>
                        </select>
                        <i className="ti-layers" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-12 small-padd">
                    <div className="form-group">
                      <div className="form-group">
                        <a href="#" className="btn btn-primary search-btn">Search</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="clearfix" />
    {/* Company Brand Start */}
    <div className="company-brand">
      <div className="container">
        <div id="company-brands" className="owl-carousel">
          <div className="brand-img">
            <img src="assets/img/microsoft-home-dark.png" className="img-responsive" alt />
          </div>
          <div className="brand-img">
            <img src="assets/img/img-home-dark.png" className="img-responsive" alt />
          </div>
          <div className="brand-img">
            <img src="assets/img/mothercare-hom-darke.png" className="img-responsive" alt />
          </div>
          <div className="brand-img">
            <img src="assets/img/paypal-home-dark.png" className="img-responsive" alt />
          </div>
          <div className="brand-img">
            <img src="assets/img/serv-home-dark.png" className="img-responsive" alt />
          </div>
          <div className="brand-img">
            <img src="assets/img/xerox-home-dark.png" className="img-responsive" alt />
          </div>
          <div className="brand-img">
            <img src="assets/img/yahoo-home-dark.png" className="img-responsive" alt />
          </div>
          <div className="brand-img">
            <img src="assets/img/mothercare-hom-darke.png" className="img-responsive" alt />
          </div>
        </div>
      </div>
    </div>
    {/* Company Brand End */}
   <section className="gray">
  <div className="container">
    <div className="row">
      <div className="main-heading">
        <h2>Browse Jobs By <span>Category</span></h2>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris aliquip.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <div className="category-box" data-aos="fade-up">
          <div className="category-desc">
            <div className="category-icon">
              <img src="assets/img/cat-1.png" className="img-responsive" alt />
              <i className="icon-bargraph abs-icon" aria-hidden="true" />
            </div>
            <div className="category-detail category-desc-text">
              <h4> <a href="browse-jobs-grid.html">Accounting &amp; Finance</a></h4>
              <p>122 Jobs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="category-box" data-aos="fade-up">
          <div className="category-desc">
            <div className="category-icon">
              <img src="assets/img/cat-2.png" className="img-responsive" alt />
              <i className="icon-tools-2 abs-icon" aria-hidden="true" />
            </div>
            <div className="category-detail category-desc-text">
              <h4> <a href="browse-jobs-grid.html">Automotive Jobs</a></h4>
              <p>155 Jobs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="category-box" data-aos="fade-up">
          <div className="category-desc">
            <div className="category-icon">
              <img src="assets/img/cat-3.png" className="img-responsive" alt />
              <i className="icon-briefcase abs-icon" aria-hidden="true" />
            </div>
            <div className="category-detail category-desc-text">
              <h4> <a href="browse-jobs-grid.html">Business</a></h4>
              <p>300 Jobs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="category-box" data-aos="fade-up">
          <div className="category-desc">
            <div className="category-icon">
              <img src="assets/img/cat-4.png" className="img-responsive" alt />
              <i className="icon-edit abs-icon" aria-hidden="true" />
            </div>
            <div className="category-detail category-desc-text">
              <h4> <a href="browse-jobs-grid.html">Education Training</a></h4>
              <p>80 Jobs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="category-box" data-aos="fade-up">
          <div className="category-desc">
            <div className="category-icon">
              <img src="assets/img/cat-5.png" className="img-responsive" alt />
              <i className="icon-heart abs-icon" aria-hidden="true" />
            </div>
            <div className="category-detail category-desc-text">
              <h4> <a href="browse-jobs-grid.html">Healthcare</a></h4>
              <p>120 Jobs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="category-box" data-aos="fade-up">
          <div className="category-desc">
            <div className="category-icon">
              <img src="assets/img/cat-6.png" className="img-responsive" alt />
              <i className="icon-wine abs-icon" aria-hidden="true" />
            </div>
            <div className="category-detail category-desc-text">
              <h4> <a href="browse-jobs-grid.html">Restaurant &amp; Food</a></h4>
              <p>78 Jobs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="category-box" data-aos="fade-up">
          <div className="category-desc">
            <div className="category-icon">
              <img src="assets/img/cat-7.png" className="img-responsive" alt />
              <i className="icon-map abs-icon" aria-hidden="true" />
            </div>
            <div className="category-detail category-desc-text">
              <h4> <a href="browse-jobs-grid.html">Transportation</a></h4>
              <p>90 Jobs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="category-box" data-aos="fade-up">
          <div className="category-desc">
            <div className="category-icon">
              <img src="assets/img/cat-8.png" className="img-responsive" alt />
              <i className="icon-desktop abs-icon" aria-hidden="true" />
            </div>
            <div className="category-detail category-desc-text">
              <h4> <a href="browse-jobs-grid.html">Telecommunications</a></h4>
              <p>210 Jobs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    <div className="clearfix" />
    <section className="video-sec dark" id="video" style={{backgroundImage: 'url(assets/img/banner-10.jpg)'}}>
      <div className="container">
        <div className="row">
          <div className="main-heading">
            <p>Best For Your Projects</p>
            <h2>Watch Our <span>video</span></h2></div>
        </div>
        <div className="video-part"><a href="#" data-toggle="modal" data-target="#my-video" className="video-btn"><i className="fa fa-play" /></a></div>
      </div>
    </section>
    <div className="clearfix" />
    <section className="how-it-works">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-md-12">
            <div className="main-heading">
              <p>Working Process</p>
              <h2>How It <span>Works</span></h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="working-process"><span className="process-img"><img src="assets/img/step-1.png" className="img-responsive" alt /><span className="process-num">01</span></span>
              <h4>Create An Account</h4>
              <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="working-process"><span className="process-img"><img src="assets/img/step-2.png" className="img-responsive" alt /><span className="process-num">02</span></span>
              <h4>Search Jobs</h4>
              <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="working-process"><span className="process-img"><img src="assets/img/step-3.png" className="img-responsive" alt /><span className="process-num">03</span></span>
              <h4>Save &amp; Apply</h4>
              <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="clearfix" />
   
    {/* pricing Section Start */}
    <section className="pricing">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-heading">
              <p>Best Candidate of The Year</p>
              <h2>Hire Expert <span>Candidate</span></h2>
            </div>
          </div>
        </div>
        {/*/row*/}
        <div className="row">
          {/* Single Freelancer Style 2 */}
          <div className="col-md-4 col-sm-6">
            <div className="top-candidate-wrap style-2">
              <div className="top-candidate-box">
                <span className="tpc-status">Available</span>
                <h4 className="flc-rate">$17/hr</h4>
                <div className="tp-candidate-inner-box">
                  <div className="top-candidate-box-thumb">
                    <img src="assets/img/can-5.jpg" className="img-responsive img-circle" alt />
                  </div>
                  <div className="top-candidate-box-detail">
                    <h4>Agustin L. Smith</h4>
                    <span className="location">Australia</span>
                  </div>
                  <div className="rattings">
                    <i className="fa fa-star fill" />
                    <i className="fa fa-star fill" />
                    <i className="fa fa-star fill" />
                    <i className="fa fa-star-half fill" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                <div className="top-candidate-box-extra">
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui.</p>
                  <ul>
                    <li>Php</li>
                    <li>Android</li>
                    <li>Html</li>
                    <li className="more-skill bg-primary">+3</li>
                  </ul>
                </div>
                <a href="top-candidate-detail.html" className="btn btn-candidate-two bg-default">View Detail</a>
                <a href="#l" className="btn btn-candidate-two bg-info">Shortlist</a>
              </div>
            </div>
          </div>
          {/* Single Freelancer Style 2 */}
          <div className="col-md-4 col-sm-6">
            <div className="top-candidate-wrap style-2">
              <div className="top-candidate-box">
                <span className="tpc-status bg-warning">At Work</span>
                <h4 className="flc-rate">$22/hr</h4>
                <div className="tp-candidate-inner-box">
                  <div className="top-candidate-box-thumb">
                    <img src="assets/img/can-5.jpg" className="img-responsive img-circle" alt />
                  </div>
                  <div className="top-candidate-box-detail">
                    <h4>Delores R. Williams</h4>
                    <span className="location">United States</span>
                  </div>
                  <div className="rattings">
                    <i className="fa fa-star fill" />
                    <i className="fa fa-star fill" />
                    <i className="fa fa-star fill" />
                    <i className="fa fa-star-half fill" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                <div className="top-candidate-box-extra">
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui.</p>
                  <ul>
                    <li>Php</li>
                    <li>Android</li>
                    <li>Html</li>
                    <li className="more-skill bg-primary">+3</li>
                  </ul>
                </div>
                <a href="top-candidate-detail.html" className="btn btn-candidate-two bg-default">View Detail</a>
                <a href="#l" className="btn btn-candidate-two bg-info">Shortlist</a>
              </div>
            </div>
          </div>
          {/* Single Freelancer Style 2 */}
          <div className="col-md-4 col-sm-6">
            <div className="top-candidate-wrap style-2">
              <div className="top-candidate-box">
                <span className="tpc-status">Available</span>
                <h4 className="flc-rate">$19/hr</h4>
                <div className="tp-candidate-inner-box">
                  <div className="top-candidate-box-thumb">
                    <img src="assets/img/can-5.jpg" className="img-responsive img-circle" alt />
                  </div>
                  <div className="top-candidate-box-detail">
                    <h4>Daniel Disroyer</h4>
                    <span className="location">Bangladesh</span>
                  </div>
                  <div className="rattings">
                    <i className="fa fa-star fill" />
                    <i className="fa fa-star fill" />
                    <i className="fa fa-star fill" />
                    <i className="fa fa-star-half fill" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                <div className="top-candidate-box-extra">
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui.</p>
                  <ul>
                    <li>Php</li>
                    <li>Android</li>
                    <li>Html</li>
                    <li className="more-skill bg-primary">+3</li>
                  </ul>
                </div>
                <a href="top-candidate-detail.html" className="btn btn-candidate-two bg-default">View Detail</a>
                <a href="#l" className="btn btn-candidate-two bg-info">Shortlist</a>
              </div>
            </div>
          </div>
        </div>
        {/* Single Freelancer */}
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="text-center">
              <a href="freelancers-2.html" className="btn btn-primary">Load More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Candidate Section */}
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
            
        </>
    )
}

export default Home
