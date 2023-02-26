import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import CustomerService from '../../service/CustomerService';
import ServiceService from '../../service/ServiceService';

const ProfilesService = () => {
  const { id } = useParams();
  console.log("idddddddddddddd",id);
  const [Data, setData] = useState({});
  const [cat, setCat] = useState({});
  const [Services,setServices]=useState();
  const onChangeHandlerCat = (e) => {


    console.log(e.target.value)
    
    setCat(e.target.value);
    console.log("id of cat",cat);
     
  };
  const getAllServices=()=>{
    ServiceService.getAll()
    .then((res)=>{
        console.log(res.data)
        setServices(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
  };
  const getServiceById=(id)=>{
    ServiceService.getOne(id)
    .then((res)=>{
        console.log(res.data)
        setData(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
  };

  useEffect(() => {
    getAllServices();
    getServiceById(id);
    
  },[id,Data]);
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
      <form method="post" >
            <div className="col-md-4 col-sm-4">
              <input type="text" className="form-control" placeholder="Keyword: Name, Tag" />
            </div>
            <div className="col-md-3 col-sm-3">
              <input type="text" className="form-control" placeholder="Location: City, State, Zip" />
            </div>
            <div className="col-md-3 col-sm-3">
              <select className="form-control" id="j-category" onChange={onChangeHandlerCat}>
                <option value>&nbsp;</option>
                {Services?.map((item,index)=>{
             return(
              
                <option  value={item._id} >{item.nom}</option>
                
                )
              })}
              
              </select>
            </div>
            <div className="col-md-2 col-sm-2">
            <Link to={`/profiles/${cat}`}>
              <button type="submit" className="btn btn-primary full-width">Filter</button>
              </Link>
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
    { Data && Data.customers && Data.customers.map((item,index)=>{
  return(
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
            <Link to={`/profile/${item._id}`}>
              <img src={"http://localhost:3000/file/"+item.infos.image} className="img-responsive" alt />
              </Link>
            </div>
            <h4>{item.name}</h4>
            <span className="designation">{Data.nom}</span>
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
        )
      })}

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

export default ProfilesService
