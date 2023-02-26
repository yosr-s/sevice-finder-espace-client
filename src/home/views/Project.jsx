import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProjectService from '../../service/ProjectService';



const Project = () => {

  const { id } = useParams();
  const [Data, setData] = useState({});
  useEffect(() => {
    return () => {
      ProjectService.getOne(id).then((res) => {
        console.log("data of get by id  ", res.data);
        setData(res.data);
        //sleep(1000)
        console.log("dattaaaaaaaaa",Data)
      });
    };
  },[]);

  


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
        {Data.galleries && Data.customer && (
          <article className="blog-news">
            <div className="short-blog">
              <figure className="img-holder">
                <div className='row'>
                  <div className='col-md-8'>
               <img src={"http://localhost:3000/file/"+Data.galleries[0]} className="img-responsive" alt="News" style={{ width: '450px' }} />
                <div className="blog-post-date">
                  {Data.service.nom}
                </div>
                </div>
                <div>
                <div className='col-md-4'>
                   <img src={"http://localhost:3000/file/"+Data.galleries[1]} className="img-responsive" alt="News" style={{ width: '225px' }} />
                 </div>
                 <div className='col-md-4'>
                   <img src={"http://localhost:3000/file/"+Data.galleries[1]} className="img-responsive" alt="News" style={{ width: '225px' }} />
                 </div>

                </div>
                </div>
              </figure>
              <br />
            

              <div className="blog-content">
                <div className="post-meta">By: <span className="author">{Data.customer.name}</span> | 10 Comments </div>
                <a href="blog-detail.html"><h2>{Data.title}</h2></a>
                <div className="blog-text">
                  <p>{Data.description}</p>
                  <div className="post-meta">Email of service provider: <span className="category"><a href="#">{Data.customer.email}</a></span></div>
                </div>
              </div>
            </div>
          </article>
        )}
          
         
        
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
