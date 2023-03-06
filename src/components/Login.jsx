import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import UserService from '../service/UserService';

const Login = () => {
  const [Data, setData] = useState({});
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("daataaa",Data);
    UserService.authenticate(Data).then((res) => {
      console.log("reees",res);
      console.log("helloooo");

      localStorage.setItem("client_name", res.data.data.user.name);
      localStorage.setItem("client_id", res.data.data.user._id);
      localStorage.setItem("client_email", res.data.data.user.email);
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("refreshToken", res.data.data.refreshtoken);

      if ((res.data.status == "success") && (res.data.data.user.itemtype == "Customer")) {
        
        console.log("status",res.data.status);
        console.log("itemtype",res.data.data.user.itemtype);
        navigate("/");
        window.location.reload();
       
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "this account does not exist!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    });
  };

    return (
        <>
        <div>
  {/* End Navigation */}
  <div className="clearfix" />
  {/* Title Header Start */}
  <section className="inner-header-title" style={{backgroundImage: 'url(assets/img/bn2.jpg)'}}>
    <div className="container">
      <h1>Login</h1>
    </div>
  </section>
  <div className="clearfix" />
  {/* Title Header End */}
  {/* Tab Section Start */}
  <section className="tab-sec gray">
    <form onSubmit={onSubmitHandler}  method="post">
    <div className="container">
      <div className="col-lg-8 col-md-8 col-sm-12 col-lg-offset-2 col-md-offset-2">
        <div className="new-logwrap">
          
          <div className="form-group">
            <label>Email</label>
            <div className="input-with-icon">
              <input onChange={onChangeHandler} name="email" type="email" className="form-control" placeholder="Enter Your Email" />
              <i className="theme-cl ti-email" />
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="input-with-icon">
              <input onChange={onChangeHandler} name="password" type="password" className="form-control" placeholder="Enter Your Password" />
              <i className="theme-cl ti-lock" />
            </div>
          </div>
         
          <div className="form-groups">
            <button type="submit" className="btn btn-primary theme-bg full-width">Login</button>
          </div>
          <br />
          <br />
          <p>
  Don't have an account?       
  <Link to="/register" style={{ color: 'blue', textDecoration: 'underline' }}>Register!</Link>
</p>
        
        </div>
      </div>
    </div>
    </form>
  </section>
  {/* Tab section End */}
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

export default Login
