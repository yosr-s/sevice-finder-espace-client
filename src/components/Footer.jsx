import React from 'react'

const Footer = () => {
    return (
        <>
           <div className="before-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="jb4-form-fields">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter your email address" />
                <span className="input-group-btn">
                  <button className="btn theme-bg" type="submit"><span className="fa fa-paper-plane-o" /></button>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 hill">
            <ul className="job stock-facts">
              <li><span>2744</span><br />Jobs Posted</li>
              <li><span>2365</span><br />Jobs Posted</li>
              <li><span>2021</span><br />Freelancer</li>
              <li><span>7542</span><br />Companies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* ============================ Before Footer ================================== */}
    {/* ============================ Footer Start ================================== */}
    <footer className="dark-footer skin-dark-footer">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="footer-widget">
                <img src="assets/img/logo-white.png" className="img-footer" alt />
                <div className="footer-add">
                  <p>Collins Street West, Victoria,<br /> Australia (AU4578).</p>
                  <p><strong>Email:</strong><br />hello@jobstock.com</p>
                  <p><strong>Call:</strong><br />91 855 742 62548</p>
                </div>
              </div>
            </div>		
            <div className="col-lg-2 col-md-2">
              <div className="footer-widget">
                <h4 className="widget-title">Navigations</h4>
                <ul className="footer-menu">
                  <li><a href="home-6.html">New Home Design</a></li>
                  <li><a href="browse-candidate-list.html">Browse Candidates</a></li>
                  <li><a href="browse-employer-list.html">Browse Employers</a></li>
                  <li><a href="advance-search-2.html">Advance Search</a></li>
                  <li><a href="checkout.html">Job With Map</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="footer-widget">
                <h4 className="widget-title">The Highlights</h4>
                <ul className="footer-menu">
                  <li><a href="index-2.html">Home Page 2</a></li>
                  <li><a href="index-3.html">Home Page 3</a></li>
                  <li><a href="index-4.html">Home Page 4</a></li>
                  <li><a href="index-5.html">Home Page 5</a></li>
                  <li><a href="login.html">LogIn</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="footer-widget">
                <h4 className="widget-title">My Account</h4>
                <ul className="footer-menu">
                  <li><a href="candidate-dashboard.html">Dashboard</a></li>
                  <li><a href="applications.html">Applications</a></li>
                  <li><a href="packages.html">Packages</a></li>
                  <li><a href="candidate-resume.html">resume.html</a></li>
                  <li><a href="register.html">SignUp Page</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="footer-widget">
                <h4 className="widget-title">Download Apps</h4>
                <a href="#" className="other-store-link">
                  <div className="other-store-app">
                    <div className="os-app-icon">
                      <i className="ti-android theme-cl" />
                    </div>
                    <div className="os-app-caps">
                      Google Play
                      <span>Get It Now</span>
                    </div>
                  </div>
                </a>
                <a href="#" className="other-store-link">
                  <div className="other-store-app">
                    <div className="os-app-icon">
                      <i className="ti-apple theme-cl" />
                    </div>
                    <div className="os-app-caps">
                      App Store
                      <span>Now it Available</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p className="mb-0">© 2020 Job Stock. Designd By <a href="https://themezhub.com/">Themez Hub</a> All Rights Reserved</p>
            </div>
            <div className="col-lg-6 col-md-6 text-right">
              <ul className="footer-bottom-social">
                <li><a href="#"><i className="ti-facebook" /></a></li>
                <li><a href="#"><i className="ti-twitter" /></a></li>
                <li><a href="#"><i className="ti-instagram" /></a></li>
                <li><a href="#"><i className="ti-linkedin" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* ============================ Footer End ================================== */}
    {/* Signin Window Code */}
    <div className="modal fade" id="signup" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="new-logwrap">
              <div className="form-group">
                <label>Username</label>
                <div className="input-with-icon">
                  <input type="text" className="form-control" placeholder="Enter Your Username" />
                  <i className="theme-cl ti-user" />
                </div>
              </div>
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
                <button type="submit" className="btn btn-primary theme-bg full-width">Register</button>
              </div>
              <div className="forget-account text-center">
                <a className="theme-cl" href="#">Forget Password?</a>
              </div>
              <div className="social-devider">
                <span className="line" />
                <span className="circle">Or</span>
              </div>
              <div className="social-login row">
                <div className="col-md-6">
                  <a href="#" className="jb-btn-icon social-login-facebook"><i className="fa fa-facebook" />Facebook</a>
                </div>
                <div className="col-md-6">
                  <a href="#" className="jb-btn-icon social-login-google"><i className="fa fa-google-plus" />Google</a>
                </div>
                <div className="col-md-6">
                  <a href="#" className="jb-btn-icon social-login-twitter"><i className="fa fa-twitter" />Twitter</a>
                </div>
                <div className="col-md-6">
                  <a href="#" className="jb-btn-icon social-login-linkedin"><i className="fa fa-linkedin" />Linkedin</a>
                </div>
              </div>
              <div className="register-account text-center">
                Don't have an account? <a className="theme-cl" href="register.html">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>   
    {/* End Signin Window */}
    <button className="w3-button w3-teal w3-xlarge w3-right" onclick="openRightMenu()"><i className="spin fa fa-cog" aria-hidden="true" /></button>
    <div className="w3-sidebar w3-bar-block w3-card-2 w3-animate-right" style={{display: 'none', right: 0}} id="rightMenu">
      <button onclick="closeRightMenu()" className="w3-bar-item w3-button w3-large">Close ×</button>
      <ul id="styleOptions" title="switch styling">
        <li>
          <a href="javascript: void(0)" className="cl-box blue" data-theme="colors/blue-style" />
        </li>
        <li>
          <a href="javascript: void(0)" className="cl-box red" data-theme="colors/red-style" />
        </li>
        <li>
          <a href="javascript: void(0)" className="cl-box purple" data-theme="colors/purple-style" />
        </li>
        <li>
          <a href="javascript: void(0)" className="cl-box green" data-theme="colors/green-style" />
        </li>
        <li>
          <a href="javascript: void(0)" className="cl-box dark-red" data-theme="colors/dark-red-style" />
        </li>
        <li>
          <a href="javascript: void(0)" className="cl-box orange" data-theme="colors/orange-style" />
        </li>
        <li>
          <a href="javascript: void(0)" className="cl-box sea-blue" data-theme="colors/sea-blue-style " />
        </li>
        <li>
          <a href="javascript: void(0)" className="cl-box pink" data-theme="colors/pink-style" />
        </li>
      </ul>
    </div>
            
        </>
    )
}

export default Footer
