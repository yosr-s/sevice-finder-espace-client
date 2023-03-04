import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ContactService from '../../service/ContactService';


const Contact = () => {
  const[Data, setData] = useState({});
  const navigate = useNavigate()
  const onChangeHandler = (e) => {
    setData({
    ...Data,
    [e.target.name]: e.target.value,
    });
};
const onSubmitHandler = (e) => {
  e.preventDefault();
  ContactService.create(Data)
  .then((res) => {
    console.log("reees",res)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your message has been sent',
      showConfirmButton: false,
      timer: 1500
    })
    //navigate("/category-list")
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
  <section className="inner-header-title" style={{backgroundImage: 'url(assets/img/banner-10.jpg)'}}>
    <div className="container">
      <h1>Contact Page</h1>
    </div>
  </section>
  <div className="clearfix" />
  {/* Title Header End */}
  {/* Contact Page Section Start */}
  <section className="contact-page">
    <div className="container">
      <h2>Drop A Mail</h2>
      <div className="col-md-4 col-sm-4">
        <div className="contact-box">
          <i className="fa fa-map-marker" />
          <p>#Street 2122, Near New Market<br />London Uk (122546)</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-4">
        <div className="contact-box">
          <i className="fa fa-envelope" />
          <p>careerdesk12@gmail.com<br />support@careerdesk.com</p>
        </div>
      </div>
      <div className="col-md-4 col-sm-4">
        <div className="contact-box">
          <i className="fa fa-phone" />
          <p>UK: 01 123 456 7895<br />Ind: +91 123 546 8758</p>
        </div>
      </div>
    </div>
  </section>
  {/* contact section End */}
  {/* contact form */}
  <section className="contact-form">
  <form onSubmit={onSubmitHandler} method="post">
    <div className="container">
      <h2>Drop A Mail</h2>
      <div className="col-md-6 col-sm-6">
        <input type="text" name="nom" onChange={onChangeHandler} className="form-control" placeholder="Your Name" />
      </div>
      <div className="col-md-6 col-sm-6">
        <input type="email" name="email" onChange={onChangeHandler} className="form-control" placeholder="Your Email" />
      </div>
      
      <div className="col-md-12 col-sm-6">
        <input type="text" name="sujet" onChange={onChangeHandler} className="form-control" placeholder="Subject" />
      </div>
      <div className="col-md-12 col-sm-12">
        <textarea className="form-control" name="message" onChange={onChangeHandler} placeholder="Message" defaultValue={""} />
      </div>
      <div className="col-md-12 col-sm-12">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </div>
    </form>
  </section>
</div>

            
        </>
    )
}

export default Contact
