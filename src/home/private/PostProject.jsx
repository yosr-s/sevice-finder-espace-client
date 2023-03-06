import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import CustomerService from '../../service/CustomerService';
import ProjectService from '../../service/ProjectService';
import NavBarDashbord from './NavBarDashbord'

const PostProject = () => {
  const [Data, setData] = useState({});
  const [files, setFile] = useState({});
  let id=localStorage.getItem("client_id")
  const [Customer,setCustomer]=useState({});
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
    
  },[]);
  const onChangeHandler = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileChange = (event) => {
    setFile(event.target.files);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();



    console.log(files);
    const formData = new FormData();

    for(let i=0;i<files.length;i++){
      formData.append(`files`, files[i]);
    }
  
    

   
    let customer=localStorage.getItem("client_id")

    formData.append("title", Data.title);
    formData.append("description", Data.description);
    formData.append("service", Customer.infos.service._id);
    formData.append("customer", customer);
    

    ProjectService.create(formData)
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your project has been posted!',
          showConfirmButton: false,
          timer: 1500
        })
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
                <h4><i className="ti-ruler-pencil" />Post a new project</h4>
              </div>
              <div className="dashboard-caption-wrap">
                <form className="post-form" onSubmit={onSubmitHandler} enctype="multipart/form-data">
                  {/* row */}
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Project Title</label>
                        <input type="text" onChange={onChangeHandler} name="title" className="form-control" placeholder="Enter Title" />
                      </div>	
                    </div>
                  </div>
                  {/* row */}
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Project Description</label>
                        <textarea onChange={onChangeHandler} name="description" className="form-control about height-120" placeholder="About Project" defaultValue={""} />
                      </div>	
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Project Galleries</label>
                        <input type="file" name="files"
                        onChange={handleFileChange}
                        multiple className="form-control" />
                      </div>	
                    </div>
                  </div>
                
               
                
                
                
                
                  <div className="row mrg-top-30">
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group text-center">
                        <button type="submit" className="btn-savepreview"><i className="ti-angle-double-right" />Publish </button>
                      </div>	
                    </div>
                  </div>
                </form>
              </div>
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

export default PostProject
