import React from 'react'

const Profile = () => {
    return (
        <>
     <div>
  <div className="clearfix" />
  {/* Title Header Start */}
  <section className="inner-header-title" style={{backgroundImage: 'url(assets/img/banner-10.jpg)'}}>
    <div className="container">
      <h1>Candidate Profile</h1>
    </div>
  </section>
  <div className="clearfix" />
  {/* Title Header End */}
  {/* Candidate Profile Start */}
  <section className="detail-desc advance-detail-pr gray-bg">
    <div className="container">
      <div className="ur-detail-wrap create-kit padd-bot-0">
        <div className="row">
          <div className="detail-pic"><img src="assets/img/can-1.png" className="img" alt /><a href="#" className="detail-edit" title="edit"><i className="fa fa-pencil" /></a></div>
          <div className="detail-status"><span>Active Now</span></div>
        </div>
        <div className="row bottom-mrg">
          <div className="col-md-12 col-sm-12">
            <div className="advance-detail detail-desc-caption">
              <h4>Daniel Declizer</h4><span className="designation">Web Designer</span>
              <ul>
                <li><strong className="j-view">85</strong>New Post</li>
                <li><strong className="j-applied">110</strong>Job Applied</li>
                <li><strong className="j-shared">120</strong>Invitation</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row no-padd">
          <div className="detail pannel-footer">
            <div className="col-md-5 col-sm-5">
              <ul className="detail-footer-social">
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa fa-instagram" /></a></li>
              </ul>
            </div>
            <div className="col-md-7 col-sm-7">
              <div className="detail-pannel-footer-btn pull-right"><a href="javascript:void(0)" data-toggle="modal" data-target="#apply-job" className="footer-btn grn-btn" title>Edit Now</a><a href="#" className="footer-btn blu-btn" title>Save Draft</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
  <div className="container">
    <div className="col-md-8 col-sm-8">
      <div className="container-detail-box">
        <div className="apply-job-header">
          <h4>Janelia Fragrintio</h4>
          <a href="company-detail.html" className="cl-success"><span><i className="fa fa-building" />App Developer</span></a>
          <span><i className="fa fa-map-marker" />United Kingdom</span>
        </div>
        <div className="apply-job-detail">
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
          <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
          <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
        </div>
        <div className="apply-job-detail">
          <h5>Skills</h5>
          <ul className="skills">
            <li>Css3</li>
            <li>Html5</li>
            <li>Photoshop</li>
            <li>Wordpress</li>
            <li>PHP</li>
            <li>Java Script</li>
          </ul>
        </div>
        <div className="apply-job-detail">
          <h5>Language</h5>
          <ul className="language">
            <li><img className="flag" src="assets/img/gb.svg" alt />English</li>
            <li><img className="flag" src="assets/img/gb.svg" alt />French</li>
            <li><img className="flag" src="assets/img/gb.svg" alt />Hindi</li>
          </ul>
        </div>
        <a href="#" className="btn btn-success">Make An Offer</a>
      </div>
      {/* Similar Jobs */}
      <div className="container-detail-box">
        <div className="row">
          <div className="col-md-12">
            <h4>Review</h4>
          </div>
        </div>
        <div className="row">
          {/* Single Review */}
          <div className="review-list">
            <div className="review-thumb">
              <img src="http://via.placeholder.com/180x180" className="img-responsive img-circle" alt />
            </div>
            <div className="review-detail">
              <h4>Daniel Luke<span>3 days ago</span></h4>
              <span className="re-designation">Web Developer</span>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            </div>
          </div>
          {/* Single Review */}
          <div className="review-list">
            <div className="review-thumb">
              <img src="http://via.placeholder.com/180x180" className="img-responsive img-circle" alt />
            </div>
            <div className="review-detail">
              <h4>Daniel Luke<span>3 days ago</span></h4>
              <span className="re-designation">Web Developer</span>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            </div>
          </div>
          {/* Single Review */}
          <div className="review-list">
            <div className="review-thumb">
              <img src="http://via.placeholder.com/180x180" className="img-responsive img-circle" alt />
            </div>
            <div className="review-detail">
              <h4>Daniel Luke<span>3 days ago</span></h4>
              <span className="re-designation">Web Developer</span>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            </div>
          </div>
          {/* Single Review */}
          <div className="review-list">
            <div className="review-thumb">
              <img src="http://via.placeholder.com/180x180" className="img-responsive img-circle" alt />
            </div>
            <div className="review-detail">
              <h4>Daniel Luke<span>3 days ago</span></h4>
              <span className="re-designation">Web Developer</span>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Sidebar Start*/}
    <div className="col-md-4 col-sm-4">
      {/* Make An Offer */}
      <div className="sidebar-container">
        <div className="sidebar-box">
          <span className="sidebar-status">Available</span>
          <h4 className="flc-rate">$17/hr</h4>
          <div className="sidebar-inner-box">
            <div className="sidebar-box-thumb">
              <img src="assets/img/can-5.jpg" className="img-responsive img-circle" alt />
            </div>
            <div className="sidebar-box-detail">
              <h4>Daniel Disroyer</h4>
              <span className="desination">App Designer</span>
            </div>
          </div>
          <div className="sidebar-box-extra">
            <ul>
              <li>Php</li>
              <li>Android</li>
              <li>Html</li>
              <li className="more-skill bg-primary">+3</li>
            </ul>
            <ul className="status-detail">
              <li className="br-1"><strong>$44/hr</strong>Hourly Rate</li>
              <li className="br-1"><strong>52 Jobs</strong>Done job</li>
              <li><strong>44</strong>Rehired</li>
            </ul>
          </div>
        </div>
        <a href="#" className="btn btn-sidebar bt-1 bg-success">Make An Offer</a>
      </div>
      {/* Website & Portfolio */}
      <div className="sidebar-wrapper">
        <div className="sidebar-box-header bb-1">
          <h4>Website &amp; Portfolio</h4>
        </div>
        <ul className="block-list">
          <li><i className="fa fa-globe cl-success" />www.mysite.com</li>
          <li><i className="fa fa-briefcase cl-success" />Portfolio</li>
          <li><i className="fa fa-pencil cl-success" />My Blog</li>
        </ul>
      </div>
      {/* Similar Profile */}
      <div className="sidebar-wrapper">
        <div className="sidebar-box-header bb-1">
          <h4>Similar Profiles</h4>
        </div>
        <div className="member-profile-list">
          <div className="member-profile-thumb">
            <a href="candidate-detail.html"><img src="assets/img/can-2.png" className="img-responsive img-circle" alt /></a>
          </div>
          <div className="member-profile-detail">
            <h4><a href="candidate-detail.html">Adam Crivatinly</a></h4>
            <span>Web Developer</span>
            <span className="cl-success">Freelancer</span>
          </div>
        </div>
        <div className="member-profile-list">
          <div className="member-profile-thumb">
            <a href="candidate-detail.html"><img src="assets/img/can-2.png" className="img-responsive img-circle" alt /></a>
          </div>
          <div className="member-profile-detail">
            <h4><a href="candidate-detail.html">Adam Crivatinly</a></h4>
            <span>Web Developer</span>
            <a href="candidate-detail.html"><span className="cl-success">Freelancer</span></a>
          </div>
        </div>
        <div className="member-profile-list">
          <div className="member-profile-thumb">
            <a href="candidate-detail.html"><img src="assets/img/can-2.png" className="img-responsive img-circle" alt /></a>
          </div>
          <div className="member-profile-detail">
            <h4><a href="candidate-detail.html">Adam Crivatinly</a></h4>
            <span>Web Developer</span>
            <a href="candidate-detail.html"><span className="cl-success">Freelancer</span></a>
          </div>
        </div>
      </div>
      {/* Share This Job */}
      <div className="sidebar-wrapper">
        <div className="sidebar-box-header bb-1">
          <h4>Share This Job</h4>
        </div>
        <ul className="social-share">
          <li><a href="#" className="fb-share"><i className="fa fa-facebook" /></a></li>
          <li><a href="#" className="tw-share"><i className="fa fa-twitter" /></a></li>
          <li><a href="#" className="gp-share"><i className="fa fa-google-plus" /></a></li>
          <li><a href="#" className="in-share"><i className="fa fa-instagram" /></a></li>
          <li><a href="#" className="li-share"><i className="fa fa-linkedin" /></a></li>
          <li><a href="#" className="be-share"><i className="fa fa-behance" /></a></li>
        </ul>
      </div>
    </div>
    {/* End Sidebar */}
  </div>
</section>

  {/* Candidate Profile End */}
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

export default Profile
