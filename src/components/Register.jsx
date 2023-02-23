import React from 'react'

const Register = () => {
    return (
        <>
          <div>
  {/* End Navigation */}
  <div className="clearfix" />
  {/* Title Header Start */}
  <section className="inner-header-title" style={{backgroundImage: 'url(assets/img/bn2.jpg)'}}>
    <div className="container">
      <h1>Login</h1>
    </div>
  </section>
  <div className="clearfix" />
  {/* Title Header End */}
  {/* Tab Section Start */}
  <section className="tab-sec gray">
    <div className="container">
      <div className="col-lg-8 col-md-8 col-sm-12 col-lg-offset-2 col-md-offset-2">
        <div className="new-logwrap">
          
          <div className="form-group">
            <label>Email</label>
            <div className="input-with-icon">
              <input type="email" className="form-control" placeholder="Enter Your Email" />
              <i className="theme-cl ti-email" />
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="input-with-icon">
              <input type="password" className="form-control" placeholder="Enter Your Password" />
              <i className="theme-cl ti-lock" />
            </div>
          </div>
         
          <div className="form-groups">
            <button type="submit" className="btn btn-primary theme-bg full-width">Login</button>
          </div>
          <br />
          <br />
          
        
        </div>
      </div>
    </div>
  </section>
  {/* Tab section End */}
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

export default Register
