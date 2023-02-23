import React from 'react'

const Project = () => {
    return (
        <>
      <div>
  <div className="clearfix" />
  {/* Title Header Start */}
  <section className="inner-header-title" style={{backgroundImage: 'url(assets/img/banner-10.jpg)'}}>
    <div className="container">
      <h1>Blog Page</h1>
    </div>
  </section>
  <div className="clearfix" />
  {/* Title Header End */}
  {/* All blog List Start */}
  <section className="section">
    <div className="container">
      <div className="row .no-mrg">
        {/* Start Blogs */}
        <div className="col-md-8">
          <article className="blog-news">
            <div className="short-blog">
              <figure className="img-holder">
                <a href="blog-detail.html"><img src="assets/img/blog/1.jpg" className="img-responsive" alt="News" /></a>
                <div className="blog-post-date">
                  Mar 12, 2017
                </div>
              </figure>
              <div className="blog-content">
                <div className="post-meta">By: <span className="author">Daniel Dax</span> | 10 Comments </div>
                <a href="blog-detail.html"><h2>Helping Kids Grow Up Stronger</h2></a>
                <div className="blog-text">
                  <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                  <div className="post-meta">Filed Under: <span className="category"><a href="#">Technology</a></span></div>
                </div>
              </div>
            </div>
          </article>
          <article className="blog-news">
            <div className="short-blog">
              <figure className="img-holder">
                <a href="blog-detail.html"><img src="assets/img/blog/2.jpg" className="img-responsive" alt="News" /></a>
                <div className="blog-post-date">
                  Mar 12, 2017
                </div>
              </figure>
              <div className="blog-content">
                <div className="post-meta">By: <span className="author">Daniel Dax</span> | 10 Comments </div>
                <a href="blog-detail.html"><h2>Helping Kids Grow Up Stronger</h2></a>
                <div className="blog-text">
                  <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                  <div className="post-meta">Filed Under: <span className="category"><a href="#">Technology</a></span></div>
                </div>
              </div>
            </div>
          </article>
          <article className="blog-news">
            <div className="short-blog">
              <figure className="img-holder">
                <a href="blog-detail.html"><img src="assets/img/blog/3.jpg" className="img-responsive" alt="News" /></a>
                <div className="blog-post-date">
                  Mar 12, 2017
                </div>
              </figure>
              <div className="blog-content">
                <div className="post-meta">By: <span className="author">Daniel Dax</span> | 10 Comments </div>
                <a href="blog-detail.html"><h2>Helping Kids Grow Up Stronger</h2></a>
                <div className="blog-text">
                  <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                  <div className="post-meta">Filed Under: <span className="category"><a href="#">Technology</a></span></div>
                </div>
              </div>
            </div>
          </article>
        </div>
        {/* End Blogs */}
        {/* Sidebar Start */}
        <div className="col-md-4">
          <div className="blog-sidebar">
            <form action="#">
              <div className="search-form">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search…" />
                  <span className="input-group-btn">
                    <button type="button" className="btn btn-default">Go</button>
                  </span>
                </div>
              </div>
            </form>
            <div className="sidebar-widget">
              <h4>Popular Category</h4>
              <ul className="sidebar-list">
                <li><a href="#">About Donation <span>(8)</span></a></li>
                <li><a href="#">About Donation <span>(8)</span></a></li>
                <li><a href="#">About Donation <span>(8)</span></a></li>
                <li><a href="#">About Donation <span>(8)</span></a></li>
                <li><a href="#">About Donation <span>(8)</span></a></li>
                <li><a href="#">About Donation <span>(8)</span></a></li>
              </ul>
            </div>
            <div className="sidebar-widget">
              <h4>Popular Category</h4>
              <div className="blog-item">
                <div className="post-thumb"><a href="blog-detail.html"><img src="assets/img/blog/1.jpg" className="img-responsive" alt /></a></div>
                <div className="blog-detail">
                  <a href="blog-details.html"><h4>Enim Ad Minim Veniam, Quis Nostrud Exercitation</h4></a>
                  <div className="post-info">Aug 10 2016</div>
                </div>
              </div>
              <div className="blog-item">
                <div className="post-thumb"><a href="blog-detail.html"><img src="assets/img/blog/2.jpg" className="img-responsive" alt /></a></div>
                <div className="blog-detail">
                  <a href="blog-details.html"><h4>Enim Ad Minim Veniam, Quis Nostrud Exercitation</h4></a>
                  <div className="post-info">Aug 10 2016</div>
                </div>
              </div><div className="blog-item">
                <div className="post-thumb"><a href="blog-detail.html"><img src="assets/img/blog/3.jpg" className="img-responsive" alt /></a></div>
                <div className="blog-detail">
                  <a href="blog-details.html"><h4>Enim Ad Minim Veniam, Quis Nostrud Exercitation</h4></a>
                  <div className="post-info">Aug 10 2016</div>
                </div>
              </div>
            </div>
            <div className="sidebar-widget">
              <h4>Recent Category</h4>
              <div className="blog-item">
                <div className="post-thumb"><a href="blog-detail.html"><img src="assets/img/blog/1.jpg" className="img-responsive" alt /></a></div>
                <div className="blog-detail">
                  <a href="blog-details.html"><h4>Enim Ad Minim Veniam, Quis Nostrud Exercitation</h4></a>
                  <div className="post-info">Aug 10 2016</div>
                </div>
              </div>
              <div className="blog-item">
                <div className="post-thumb"><a href="blog-detail.html"><img src="assets/img/blog/2.jpg" className="img-responsive" alt /></a></div>
                <div className="blog-detail">
                  <a href="blog-details.html"><h4>Enim Ad Minim Veniam, Quis Nostrud Exercitation</h4></a>
                  <div className="post-info">Aug 10 2016</div>
                </div>
              </div><div className="blog-item">
                <div className="post-thumb"><a href="blog-detail.html"><img src="assets/img/blog/3.jpg" className="img-responsive" alt /></a></div>
                <div className="blog-detail">
                  <a href="blog-details.html"><h4>Enim Ad Minim Veniam, Quis Nostrud Exercitation</h4></a>
                  <div className="post-info">Aug 10 2016</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sidebar Start */}
      </div>
      <div className="row">
        <ul className="pagination">
          <li><a href="#">«</a></li>
          <li className="active"><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li> 
          <li><a href="#">4</a></li> 
          <li><a href="#"><i className="fa fa-ellipsis-h" /></a></li> 
          <li><a href="#">»</a></li> 
        </ul>
      </div>
    </div>
  </section>
  {/* All Blog List End */}
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

export default Project
