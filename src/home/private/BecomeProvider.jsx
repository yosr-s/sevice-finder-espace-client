import React, { useEffect, useState } from 'react'
import CustomerService from '../../service/CustomerService';
import InfosService from '../../service/InfosService';
import NavBarDashbord from './NavBarDashbord'
import ServiceService from '../../service/ServiceService';
import Swal from 'sweetalert2';
import { Link,useNavigate } from 'react-router-dom'



const BecomeProvider = () => {
  const navigate = useNavigate();
  let id=localStorage.getItem("client_id")
  const [Customer,setCustomer]=useState({});
  const [Data, setData] = useState({});
  const [file, setFile] = useState({});
  const [Service, setService] = useState({});
  const [ServiceId, setServiceId] = useState({});
  //get all services
  const getAll = () => {
    ServiceService.getAll()
      .then((res) => {
        console.log("res of getall services",res.data);
        setService(res.data);
        console.log("service",Service);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //get service id
  const onChangeHandlerSer = (e) => {


    console.log({[e.target.name]: e.target.value,})
    
    setServiceId(e.target.value);
    console.log("service id",ServiceId)
  };
  //get customer by id
  const getCustomerById=(id)=>{
    CustomerService.getOne(id)
    .then((res)=>{
        console.log("res.data",res.data)
        setCustomer(res.data)
        console.log("data",Customer)
    })
    .catch((err)=>{
        console.log(err)
    })
  };
  useEffect(() => {
    getCustomerById(id);
    getAll();
    
  },[]);
  //get infos
  const onChangeHandler = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };
  //get file
  const handleFileChange=(event) =>{

    setFile(event.target.files[0])

  }
  //post infos
  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(file)
    const formData=new FormData();

    let customer=localStorage.getItem("client_id")
    console.log("service,",ServiceId)

    formData.append('file',file);
    formData.append('service',ServiceId);
    formData.append('customer',customer);
    formData.append('fb_link',Data.fb_link);
    formData.append('insta_link',Data.insta_link);
    formData.append('linkedin_link',Data.linkedin_link);
    formData.append('description',Data.description);


    InfosService.create(formData)
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your infos has been posted!',
          showConfirmButton: false,
          timer: 1500
        })
        navigate("/dashboard")
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      });
  };

    return (
        <>
       <div>
  <div className="clearfix" />
  {/* General Detail Start */}
  <section className="dashboard-wrap">
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Wrap */}
        <NavBarDashbord/>

        {/* Content Wrap */}
        <div className="col-lg-9 col-md-8">
          <div className="dashboard-body">
            <div className="dashboard-caption">
              <div className="dashboard-caption-header">
                <h4><i className="ti-id-badge" />Add additional infos to become a service provider</h4>
              </div>
              <form onSubmit={onSubmitHandler} enctype="multipart/form-data">
              <div className="dashboard-caption-wrap">
                {/* row */}
                <div className="row mrg-top-20">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label>Profile Photo</label>
                      <input type="file" name="file"
                        onChange={handleFileChange} className="form-control"  />
                    </div>	
                  </div>
                 
                 
                  <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="form-group">
        <label>Service</label>
        {Service.length > 0 ? (
          <select id="jb-category" name="service" className="form-control" onChange={onChangeHandlerSer}>
            {Service.map((item) => (
              <option key={item._id} value={item._id}>
                {item.nom}
              </option>
            ))}
          </select>
        ) : (
          <p>Loading Service data...</p>
        )}
      </div>
    </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label>Your facebook link</label>
                      <input onChange={onChangeHandler} type="text" name="fb_link" className="form-control" placeholder="facebook link" />
                    </div>	
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label>Your Instagram link</label>
                      <input onChange={onChangeHandler} type="text" name="insta_link" className="form-control" placeholder="instagram link" />
                    </div>	
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label>LinkedIn link</label>
                      <input onChange={onChangeHandler} type="text" name="linkedin_link" className="form-control" placeholder="linkedIn link" />
                    </div>	
                  </div>
                  <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Description</label>
                        <textarea onChange={onChangeHandler}  name="description" className="form-control about height-120" placeholder="About You" defaultValue={""} />
                      </div>	
                    </div>
                
                </div>
              
              <br />
               
                <button type="submit" className="btn-savepreview"><i className="ti-angle-double-right" />Update Changes</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* General Detail End */}
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

export default BecomeProvider
