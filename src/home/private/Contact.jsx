import React from 'react'

const Contact = () => {
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
    <div className="container">
      <h2>Drop A Mail</h2>
      <div className="col-md-6 col-sm-6">
        <input type="text" className="form-control" placeholder="Your Name" />
      </div>
      <div className="col-md-6 col-sm-6">
        <input type="email" className="form-control" placeholder="Your Email" />
      </div>
      <div className="col-md-6 col-sm-6">
        <input type="text" className="form-control" placeholder="Phone Number" />
      </div>
      <div className="col-md-6 col-sm-6">
        <input type="text" className="form-control" placeholder="Subject" />
      </div>
      <div className="col-md-12 col-sm-12">
        <textarea className="form-control" placeholder="Message" defaultValue={""} />
      </div>
      <div className="col-md-12 col-sm-12">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </div>
  </section>
</div>

            
        </>
    )
}

export default Contact
