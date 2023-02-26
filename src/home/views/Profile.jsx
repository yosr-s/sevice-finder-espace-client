import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import CustomerService from '../../service/CustomerService';


const Profile = () => {
  const { id } = useParams();
  console.log("idddddddddddddd",id);
  const [Data, setData] = useState({});
  const getCustomerById=(id)=>{
    CustomerService.getOne(id)
    .then((res)=>{
        console.log("res.data",res.data)
        setData(res.data)
        console.log("data",Data)
    })
    .catch((err)=>{
        console.log(err)
    })
  };
  useEffect(() => {
    getCustomerById(id);
    
  },[]);

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
  {Data && Data.infos && Data.infos.service && Data.infos.image && Data.infos.service.nom  && (
    <div className="container">
      <div className="ur-detail-wrap create-kit padd-bot-0">
        <div className="row">
          <div className="detail-pic"><img src={"http://localhost:3000/file/"+Data.infos.image} className="img" alt /><a href="#" className="detail-edit" title="edit"><i className="fa fa-pencil" /></a></div>
          <div className="detail-status"><span>Up To Work</span></div>
        </div>
        <div className="row bottom-mrg">
          <div className="col-md-12 col-sm-12">
            <div className="advance-detail detail-desc-caption">
              <h4>{Data.name}</h4>{Data.infos.service.nom}<span className="designation"></span>
              <ul>
                <li><strong className="j-view">1</strong>Service</li>
                <li><strong className="j-applied">{Data.projects.length}</strong> Projects</li>
                <li><strong className="j-shared">120</strong>Reviews</li>
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
              <div className="detail-pannel-footer-btn pull-right">
                <a href="javascript:void(0)" data-toggle="modal" data-target="#apply-job" className="footer-btn grn-btn" title>Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     )}
  </section>
  <section>
  {Data && Data.infos && Data.infos.service && Data.infos.image && Data.infos.service.nom  && (

  <div className="container">
    <div className="col-md-8 col-sm-8">
      <div className="container-detail-box">
        <div className="apply-job-header">
          <h4>{Data.name}</h4>
          <a href="company-detail.html" className="cl-success"><span><i className="fa fa-building" />{Data.email}</span></a>
          
        </div>
        <div className="apply-job-detail">
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
          <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
          <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
        </div>
       
      
        <a href="#" className="btn btn-success">Make An Offer</a>
      </div>
      {/* reviews */}
      <div className="container-detail-box">
        <div className="row">
          <div className="col-md-12">
            <center>
            <h3>PROJECTS</h3>
            </center>
          </div>
        </div>
        <div className="row">
          {/* Single Review */}
          { Data &&  Data.projects.map((item,index)=>{
  return(
          <div className="review-list">
            <div className="review-thumb">
              <img src={"http://localhost:3000/file/"+item.galleries[0]} className="img-responsive img-circle" alt />
            </div>
            <div className="review-detail">
            <h4><Link to={`/project/${item._id}`} style={{ textDecoration: 'underline', color: 'green' }}>{item.title}</Link></h4>

              <span className="re-designation">{Data.infos.service.nom}</span>
              <p>{item.description}</p>
            </div>
          </div>
           )
          })}
      
        </div>
     <div>
      {/*projects */}
      <div className="row">
          <div className="col-md-12">
            <center>
            <h3>REVIEWS</h3>
            </center>
          </div>
        </div>
        <div className="row">
          {/* Single Review */}
          { Data &&  Data.reviews.map((item,index)=>{
  return(
          <div className="review-list">
            <div className="review-thumb">
              <img src={"http://localhost:3000/file/"+item.customer.infos.image} className="img-responsive img-circle" alt />
            </div>
            <div className="review-detail">
            
              <h4>{item.customer.name}</h4>
           
              <span className="re-designation">{item.customer.email}</span>
              <p>{item.review}</p>
            </div>
          </div>
           )
          })}
      
        </div>
      

        <h3>Leave your review!</h3>
        <br />

        <form action="">
          <div className="form-group">
            <h4>your review: </h4>
            <input type="text" className="form-control" id="name" placeholder="Enter your review" />
          </div>
          <button type="submit" className='btn btn-primary'>Submit</button>

        </form>
      </div>

      </div>
    </div>
    {/* Sidebar Start*/}
   
    {/* End Sidebar */}
  </div>
  )}
 
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
