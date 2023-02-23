import React from 'react'

const About = () => {
    return (
        <>
        <div>
  <div className="hero-banner" data-ride="carousel" data-pause="hover" data-interval="false">
    <div className="hero-img">
      <img src="assets/img/gtrr.jpg" className="img-responsive" alt />
    </div>
    <div className="container">
      <div className="row">
        <div className="col col-md-6 col-sm-8">
          <div className="content">
            <h2>Talent?<br /> Meet Opportunity.</h2>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas</p>
            <form className="banner-form" data-animation="animated fadeInUp">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search For..." />
                <span className="input-group-btn">
                  <button type="button" className="btn bg-success">Go &amp; Search</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="clearfix" />
  {/* Main Banner Section End */}
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
  {/* ====================== How It Work ================= */}
  <section className="how-it-works">
    <div className="container">
      <div className="row" data-aos="fade-up">
        <div className="col-md-12">
          <div className="main-heading">
            <p>Working Process</p>
            <h2>How It <span>Works</span></h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-4">
          <div className="working-process">
            <span className="process-img">
              <img src="assets/img/step-1.png" className="img-responsive" alt />
              <span className="process-num">01</span>
            </span>
            <h4>Create An Account</h4>
            <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="working-process">
            <span className="process-img">
              <img src="assets/img/step-2.png" className="img-responsive" alt />
              <span className="process-num">02</span>
            </span>
            <h4>Search Jobs</h4>
            <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="working-process">
            <span className="process-img">
              <img src="assets/img/step-3.png" className="img-responsive" alt />
              <span className="process-num">03</span>
            </span>
            <h4>Save &amp; Apply</h4>
            <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ========= start Call To Action section =========== */}
  <div className="clearfix" />
  <section className="call-to-act">
    <div className="container-fluid">
      <div className="col-md-6 col-sm-6 no-padd bl-dark">
        <div className="call-to-act-caption">
          <h2>We Are Expert In Web design and development</h2>
          <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</h3>
          <a href="#" className="btn bat-call-to-act">Hire Us</a>
        </div>
      </div>
      <div className="col-md-6 col-sm-6 no-padd gr-dark">
        <div className="call-to-act-caption">
          <h2>We Are Expert In Web design and development</h2>
          <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</h3>
          <a href="#" className="btn bat-call-to-act">Join Us</a>
        </div>
      </div>
    </div>
  </section>
  {/* =========== Call To Action section End ============= */}
  {/* ====================== Freelancer Slide ================= */}
  <section>
    <div className="container">
      <div className="row" data-aos="fade-up">
        <div className="col-md-12">
          <div className="main-heading">
            <p>Hire Experts</p>
            <h2>Hire Experts <span>Team</span></h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="grid-slide">
          {/* Single Freelancer */}
          <div className="grid-slide-box">
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
          {/* Single Freelancer */}
          <div className="grid-slide-box">
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
          {/* Single Freelancer */}
          <div className="grid-slide-box">
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
          {/* Single Freelancer */}
          <div className="grid-slide-box">
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
          {/* Single Freelancer */}
          <div className="grid-slide-box">
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
          {/* Single Freelancer */}
          <div className="grid-slide-box">
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
      </div>
    </div>
  </section>
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

export default About
