import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import ServiceService from '../../service/ServiceService';
import { useNavigate } from "react-router-dom";

const ProjectsService = () => {
  const navigate = useNavigate();

  const { id } = useParams();
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
            <Link to={`/projects/${cat}`}>
              <button type="submit" className="btn btn-primary full-width">Filter</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* Company Searrch Filter End */}
      {/*Browse Job In Grid*/}
      <div className="row extra-mrg">
      
      {Data && Data.projects && Data.projects.map((item,index)=>{
  return(
        <div className="col-md-4 col-sm-6">
          <div className="grid-view brows-job-list">
            <div className="brows-job-company-img">
              <img src={"http://localhost:3000/file/"+item.galleries[0]} className="img-responsive" alt />
            </div>
            <div className="brows-job-position">
            <h3><Link to={`/project/${item._id}`}>{item.title}</Link></h3>
              <p><span>Service Provider: {item.customer.name}</span></p>
            </div>
            <div className="job-position">
              <span className="job-num">{item.galleries.length} galleries</span>
            </div>
           
           <br />
           
            <span className="tg-themetag tg-featuretag">{Data.nom}</span>
          </div>
        </div>
        
         
          )
        })}

      
       
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
