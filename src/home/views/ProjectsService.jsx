import React from 'react'

const ProjectsService = () => {
  return (
    <>
    <div>
  <div className="clearfix" />
  {/* Title Header Start */}
  <section className="inner-header-title" style={{backgroundImage: 'url(assets/img/banner-10.jpg)'}}>
    <div className="container">
      <h1>Browse Jobs</h1>
    </div>
  </section>
  <div className="clearfix" />
  {/* Title Header End */}
  {/* ========== Begin: Brows job ===============  */}
  <section>
    <div className="container">
      {/* Company Searrch Filter Start */}
      <div className="row extra-mrg">
        <div className="wrap-search-filter">
          <form>
            <div className="col-md-4 col-sm-4">
              <input type="text" className="form-control" placeholder="Keyword: Name, Tag" />
            </div>
            <div className="col-md-3 col-sm-3">
              <input type="text" className="form-control" placeholder="Location: City, State, Zip" />
            </div>
            <div className="col-md-3 col-sm-3">
              <select className="form-control" id="j-category">
                <option value>&nbsp;</option>
                <option value={1}>Information Technology</option>
                <option value={2}>Mechanical</option>
                <option value={3}>Hardware</option>
                <option value={4}>Hospitality &amp; Tourism</option>
                <option value={5}>Education &amp; Training</option>
                <option value={6}>Government &amp; Public</option>
                <option value={7}>Architecture</option>
              </select>
            </div>
            <div className="col-md-2 col-sm-2">
              <button type="submit" className="btn btn-primary full-width">Filter</button>
            </div>
          </form>
        </div>
      </div>
      {/* Company Searrch Filter End */}
      {/*Browse Job In Grid*/}
      <div className="row extra-mrg">
        <div className="col-md-4 col-sm-6">
          <div className="grid-view brows-job-list">
            <div className="brows-job-company-img">
              <img src="assets/img/com-1.jpg" className="img-responsive" alt />
            </div>
            <div className="brows-job-position">
              <h3><a href="job-detail.html">Web Developer</a></h3>
              <p><span>Google</span></p>
            </div>
            <div className="job-position">
              <span className="job-num">5 Position</span>
            </div>
            <div className="brows-job-type">
              <span className="full-time">Full Time</span>
            </div>
            <ul className="grid-view-caption">
              <li>
                <div className="brows-job-location">
                  <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                </div>
              </li>
              <li>
                <p><span className="brows-job-sallery"><i className="fa fa-money" />$110 - 200</span></p>
              </li>
            </ul>
            <span className="tg-themetag tg-featuretag">Premium</span>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="grid-view brows-job-list">
            <div className="brows-job-company-img">
              <img src="assets/img/com-2.jpg" className="img-responsive" alt />
            </div>
            <div className="brows-job-position">
              <h3><a href="job-detail.html">Web Developer</a></h3>
              <p><span>Google</span></p>
            </div>
            <div className="job-position">
              <span className="job-num">5 Position</span>
            </div>
            <div className="brows-job-type">
              <span className="part-time">Part Time</span>
            </div>
            <ul className="grid-view-caption">
              <li>
                <div className="brows-job-location">
                  <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                </div>
              </li>
              <li>
                <p><span className="brows-job-sallery"><i className="fa fa-money" />$110 - 200</span></p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="grid-view brows-job-list">
            <div className="brows-job-company-img">
              <img src="assets/img/com-3.jpg" className="img-responsive" alt />
            </div>
            <div className="brows-job-position">
              <h3><a href="job-detail.html">Web Developer</a></h3>
              <p><span>Google</span></p>
            </div>
            <div className="job-position">
              <span className="job-num">5 Position</span>
            </div>
            <div className="brows-job-type">
              <span className="freelanc">Freelancer</span>
            </div>
            <ul className="grid-view-caption">
              <li>
                <div className="brows-job-location">
                  <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                </div>
              </li>
              <li>
                <p><span className="brows-job-sallery"><i className="fa fa-money" />$110 - 200</span></p>
              </li>
            </ul>
            <span className="tg-themetag tg-featuretag">Premium</span>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="grid-view brows-job-list">
            <div className="brows-job-company-img">
              <img src="assets/img/com-4.jpg" className="img-responsive" alt />
            </div>
            <div className="brows-job-position">
              <h3><a href="job-detail.html">Web Developer</a></h3>
              <p><span>Google</span></p>
            </div>
            <div className="job-position">
              <span className="job-num">5 Position</span>
            </div>
            <div className="brows-job-type">
              <span className="enternship">Enternship</span>
            </div>
            <ul className="grid-view-caption">
              <li>
                <div className="brows-job-location">
                  <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                </div>
              </li>
              <li>
                <p><span className="brows-job-sallery"><i className="fa fa-money" />$110 - 200</span></p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="grid-view brows-job-list">
            <div className="brows-job-company-img">
              <img src="assets/img/com-5.jpg" className="img-responsive" alt />
            </div>
            <div className="brows-job-position">
              <h3><a href="job-detail.html">Web Developer</a></h3>
              <p><span>Google</span></p>
            </div>
            <div className="job-position">
              <span className="job-num">5 Position</span>
            </div>
            <div className="brows-job-type">
              <span className="full-time">Full Time</span>
            </div>
            <ul className="grid-view-caption">
              <li>
                <div className="brows-job-location">
                  <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                </div>
              </li>
              <li>
                <p><span className="brows-job-sallery"><i className="fa fa-money" />$110 - 200</span></p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="grid-view brows-job-list">
            <div className="brows-job-company-img">
              <img src="assets/img/com-6.jpg" className="img-responsive" alt />
            </div>
            <div className="brows-job-position">
              <h3><a href="job-detail.html">Web Developer</a></h3>
              <p><span>Google</span></p>
            </div>
            <div className="job-position">
              <span className="job-num">5 Position</span>
            </div>
            <div className="brows-job-type">
              <span className="part-time">Part Time</span>
            </div>
            <ul className="grid-view-caption">
              <li>
                <div className="brows-job-location">
                  <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                </div>
              </li>
              <li>
                <p><span className="brows-job-sallery"><i className="fa fa-money" />$110 - 200</span></p>
              </li>
            </ul>
            <span className="tg-themetag tg-featuretag">Premium</span>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="grid-view brows-job-list">
            <div className="brows-job-company-img">
              <img src="assets/img/com-6.jpg" className="img-responsive" alt />
            </div>
            <div className="brows-job-position">
              <h3><a href="job-detail.html">Web Developer</a></h3>
              <p><span>Google</span></p>
            </div>
            <div className="job-position">
              <span className="job-num">5 Position</span>
            </div>
            <div className="brows-job-type">
              <span className="full-time">Full Time</span>
            </div>
            <ul className="grid-view-caption">
              <li>
                <div className="brows-job-location">
                  <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                </div>
              </li>
              <li>
                <p><span className="brows-job-sallery"><i className="fa fa-money" />$110 - 200</span></p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="grid-view brows-job-list">
            <div className="brows-job-company-img">
              <img src="assets/img/com-7.jpg" className="img-responsive" alt />
            </div>
            <div className="brows-job-position">
              <h3><a href="job-detail.html">Web Developer</a></h3>
              <p><span>Google</span></p>
            </div>
            <div className="job-position">
              <span className="job-num">5 Position</span>
            </div>
            <div className="brows-job-type">
              <span className="freelanc">Freelancer</span>
            </div>
            <ul className="grid-view-caption">
              <li>
                <div className="brows-job-location">
                  <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                </div>
              </li>
              <li>
                <p><span className="brows-job-sallery"><i className="fa fa-money" />$110 - 200</span></p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="grid-view brows-job-list">
            <div className="brows-job-company-img">
              <img src="assets/img/com-1.jpg" className="img-responsive" alt />
            </div>
            <div className="brows-job-position">
              <h3><a href="job-detail.html">Web Developer</a></h3>
              <p><span>Google</span></p>
            </div>
            <div className="job-position">
              <span className="job-num">5 Position</span>
            </div>
            <div className="brows-job-type">
              <span className="enternship">Enternship</span>
            </div>
            <ul className="grid-view-caption">
              <li>
                <div className="brows-job-location">
                  <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                </div>
              </li>
              <li>
                <p><span className="brows-job-sallery"><i className="fa fa-money" />$110 - 200</span></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*/.Browse Job In Grid*/}
      <div className="row">
        <ul className="pagination">
          <li><a href="#"><i className="ti-arrow-left" /></a></li>
          <li className="active"><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li> 
          <li><a href="#">4</a></li> 
          <li><a href="#"><i className="fa fa-ellipsis-h" /></a></li> 
          <li><a href="#"><i className="ti-arrow-right" /></a></li> 
        </ul>
      </div>
    </div>
  </section>
  {/* ========== Begin: Brows job Grid End ===============  */}
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

export default ProjectsService
