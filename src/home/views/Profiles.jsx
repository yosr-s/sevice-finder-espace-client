import React from 'react'

const Profiles = () => {
    return (
        <>
       <div>
  <div className="clearfix" />
  {/* Title Header Start */}
  <section className="inner-header-title" style={{backgroundImage: 'url(assets/img/bn2.jpg)'}}>
    <div className="container">
      <h1>Browse Resume</h1>
    </div>
  </section>
  <div className="clearfix" />
  {/* Title Header End */}
  {/* Browse Resume List Start */}
 <section>
  <div className="container">
    {/* search filter */}
    <div className="row extra-mrg">
      <div className="wrap-search-filter">
        <form>
          <div className="col-md-3 col-sm-3">
            <input type="text" className="form-control" placeholder="Anywhere..." />
          </div>
          <div className="col-md-3 col-sm-3">
            <input type="text" className="form-control" placeholder="Keyword. Design, Seo.." />
          </div>
          <div className="col-md-3 col-sm-3">
            <select className="form-control" id="j-category">
              <option value>&nbsp;</option>
              <option value={1}>Admin Support</option>
              <option value={2}>Customer Service</option>
              <option value={3}>Data Analytics</option>
              <option value={4}>Design &amp; Creative</option>
              <option value={5}>Software Developing</option>
              <option value={6}>Content Writer</option>
              <option value={7}>Sales &amp; Marketing</option>
            </select>
          </div>
          <div className="col-md-3 col-sm-3">
            <button type="submit" className="btn btn-primary full-width">Filter</button>
          </div>
        </form>
      </div>
    </div>
    {/* search filter End */}
    {/* Freelancers Start */}
   <section className="manage-employee gray">
  <div className="container">
    {/* Manage Employee */}
    <div className="row">
      <div className="col-md-4 col-sm-6">
        <div className="jn-employee">
          <a href="#" className="mail-form"><i className="fa fa-envelope" /></a>
          <div className="pull-right">
            <div className="btn-group action-btn">
              <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-ellipsis-v" />
              </button>
              <ul className="dropdown-menu pull-right" role="menu">
                <li><a href="#">Favourite</a>
                </li>
                <li><a href="#">Edit</a>
                </li>
                <li><a href="#">Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="employee-caption">
            <div className="employee-caption-pic">
              <img src="assets/img/client-1.jpg" className="img-responsive" alt />
            </div>
            <h4>Anna Hoysted</h4>
            <span className="designation">Web Designer</span>
            <ul className="employee-social">
              <li><a href="#" title><i className="fa fa-facebook" /></a></li>
              <li><a href="#" title><i className="fa fa-twitter" /></a></li>
              <li><a href="#" title><i className="fa fa-google-plus" /></a></li>
              <li><a href="#" title><i className="fa fa-linkedin" /></a></li>
              <li><a href="#" title><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="jn-employee">
          <a href="#" className="mail-form"><i className="fa fa-envelope" /></a>
          <div className="pull-right">
            <div className="btn-group action-btn">
              <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-ellipsis-v" />
              </button>
              <ul className="dropdown-menu pull-right" role="menu">
                <li><a href="#">Favourite</a>
                </li>
                <li><a href="#">Edit</a>
                </li>
                <li><a href="#">Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="employee-caption">
            <div className="employee-caption-pic">
              <img src="assets/img/client-2.jpg" className="img-responsive" alt />
            </div>
            <h4>Jesse Leslie</h4>
            <span className="designation">App Designer</span>
            <ul className="employee-social">
              <li><a href="#" title><i className="fa fa-facebook" /></a></li>
              <li><a href="#" title><i className="fa fa-twitter" /></a></li>
              <li><a href="#" title><i className="fa fa-google-plus" /></a></li>
              <li><a href="#" title><i className="fa fa-linkedin" /></a></li>
              <li><a href="#" title><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="jn-employee">
          <a href="#" className="mail-form"><i className="fa fa-envelope" /></a>
          <div className="pull-right">
            <div className="btn-group action-btn">
              <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-ellipsis-v" />
              </button>
              <ul className="dropdown-menu pull-right" role="menu">
                <li><a href="#">Favourite</a>
                </li>
                <li><a href="#">Edit</a>
                </li>
                <li><a href="#">Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="employee-caption">
            <div className="employee-caption-pic">
              <img src="assets/img/client-3.jpg" className="img-responsive" alt />
            </div>
            <h4>Zane Joyner</h4>
            <span className="designation">IOS Developer</span>
            <ul className="employee-social">
              <li><a href="#" title><i className="fa fa-facebook" /></a></li>
              <li><a href="#" title><i className="fa fa-twitter" /></a></li>
              <li><a href="#" title><i className="fa fa-google-plus" /></a></li>
              <li><a href="#" title><i className="fa fa-linkedin" /></a></li>
              <li><a href="#" title><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="jn-employee">
          <a href="#" className="mail-form"><i className="fa fa-envelope" /></a>
          <div className="pull-right">
            <div className="btn-group action-btn">
              <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-ellipsis-v" />
              </button>
              <ul className="dropdown-menu pull-right" role="menu">
                <li><a href="#">Favourite</a>
                </li>
                <li><a href="#">Edit</a>
                </li>
                <li><a href="#">Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="employee-caption">
            <div className="employee-caption-pic">
              <img src="assets/img/client-4.jpg" className="img-responsive" alt />
            </div>
            <h4>Finn Osman</h4>
            <span className="designation">UI/UX Designer</span>
            <ul className="employee-social">
              <li><a href="#" title><i className="fa fa-facebook" /></a></li>
              <li><a href="#" title><i className="fa fa-twitter" /></a></li>
              <li><a href="#" title><i className="fa fa-google-plus" /></a></li>
              <li><a href="#" title><i className="fa fa-linkedin" /></a></li>
              <li><a href="#" title><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="jn-employee">
          <a href="#" className="mail-form"><i className="fa fa-envelope" /></a>
          <div className="pull-right">
            <div className="btn-group action-btn">
              <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-ellipsis-v" />
              </button>
              <ul className="dropdown-menu pull-right" role="menu">
                <li><a href="#">Favourite</a>
                </li>
                <li><a href="#">Edit</a>
                </li>
                <li><a href="#">Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="employee-caption">
            <div className="employee-caption-pic">
              <img src="assets/img/client-5.jpg" className="img-responsive" alt />
            </div>
            <h4>Taylah Axon</h4>
            <span className="designation">PHP Developer</span>
            <ul className="employee-social">
              <li><a href="#" title><i className="fa fa-facebook" /></a></li>
              <li><a href="#" title><i className="fa fa-twitter" /></a></li>
              <li><a href="#" title><i className="fa fa-google-plus" /></a></li>
              <li><a href="#" title><i className="fa fa-linkedin" /></a></li>
              <li><a href="#" title><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="jn-employee">
          <a href="#" className="mail-form"><i className="fa fa-envelope" /></a>
          <div className="pull-right">
            <div className="btn-group action-btn">
              <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-ellipsis-v" />
              </button>
              <ul className="dropdown-menu pull-right" role="menu">
                <li><a href="#">Favourite</a>
                </li>
                <li><a href="#">Edit</a>
                </li>
                <li><a href="#">Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="employee-caption">
            <div className="employee-caption-pic">
              <img src="assets/img/client-1.jpg" className="img-responsive" alt />
            </div>
            <h4>Daniel Decose</h4>
            <span className="designation">Web Designer</span>
            <ul className="employee-social">
              <li><a href="#" title><i className="fa fa-facebook" /></a></li>
              <li><a href="#" title><i className="fa fa-twitter" /></a></li>
              <li><a href="#" title><i className="fa fa-google-plus" /></a></li>
              <li><a href="#" title><i className="fa fa-linkedin" /></a></li>
              <li><a href="#" title><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="jn-employee">
          <a href="#" className="mail-form"><i className="fa fa-envelope" /></a>
          <div className="pull-right">
            <div className="btn-group action-btn">
              <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-ellipsis-v" />
              </button>
              <ul className="dropdown-menu pull-right" role="menu">
                <li><a href="#">Favourite</a>
                </li>
                <li><a href="#">Edit</a>
                </li>
                <li><a href="#">Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="employee-caption">
            <div className="employee-caption-pic">
              <img src="assets/img/client-1.jpg" className="img-responsive" alt />
            </div>
            <h4>Charlotte Griffiths</h4>
            <span className="designation">SEO Expert</span>
            <ul className="employee-social">
              <li><a href="#" title><i className="fa fa-facebook" /></a></li>
              <li><a href="#" title><i className="fa fa-twitter" /></a></li>
              <li><a href="#" title><i className="fa fa-google-plus" /></a></li>
              <li><a href="#" title><i className="fa fa-linkedin" /></a></li>
              <li><a href="#" title><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="jn-employee">
          <a href="#" className="mail-form"><i className="fa fa-envelope" /></a>
          <div className="pull-right">
            <div className="btn-group action-btn">
              <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-ellipsis-v" />
              </button>
              <ul className="dropdown-menu pull-right" role="menu">
                <li><a href="#">Favourite</a>
                </li>
                <li><a href="#">Edit</a>
                </li>
                <li><a href="#">Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="employee-caption">
            <div className="employee-caption-pic">
              <img src="assets/img/client-2.jpg" className="img-responsive" alt />
            </div>
            <h4>Charlotte Penfold</h4>
            <span className="designation">Java Developer</span>
            <ul className="employee-social">
              <li><a href="#" title><i className="fa fa-facebook" /></a></li>
              <li><a href="#" title><i className="fa fa-twitter" /></a></li>
              <li><a href="#" title><i className="fa fa-google-plus" /></a></li>
              <li><a href="#" title><i className="fa fa-linkedin" /></a></li>
              <li><a href="#" title><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="jn-employee">
          <a href="#" className="mail-form"><i className="fa fa-envelope" /></a>
          <div className="pull-right">
            <div className="btn-group action-btn">
              <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-ellipsis-v" />
              </button>
              <ul className="dropdown-menu pull-right" role="menu">
                <li><a href="#">Favourite</a>
                </li>
                <li><a href="#">Edit</a>
                </li>
                <li><a href="#">Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="employee-caption">
            <div className="employee-caption-pic">
              <img src="assets/img/client-5.jpg" className="img-responsive" alt />
            </div>
            <h4>Daniel Dax</h4>
            <span className="designation">Web Designer</span>
            <ul className="employee-social">
              <li><a href="#" title><i className="fa fa-facebook" /></a></li>
              <li><a href="#" title><i className="fa fa-twitter" /></a></li>
              <li><a href="#" title><i className="fa fa-google-plus" /></a></li>
              <li><a href="#" title><i className="fa fa-linkedin" /></a></li>
              <li><a href="#" title><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
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

  </div>
</section>

  {/* Browse Resume List End */}
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

export default Profiles
