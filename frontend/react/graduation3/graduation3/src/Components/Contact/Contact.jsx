import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
 <>
 <section className="container mt-5">
  <div className="row">
    <div className="col-sm-12 text-center mb-4">
    <h2 className='text-primary fw-bold mb-5'id="glitch">Contact Us Now</h2>
    </div>
    <div className="col-sm-12 mb-4 col-md-5">
      <div className="card border-primary rounded ">
        <div className="card-header p-0">
          <div className="bg-primary text-white text-center rounded-3  p-4">
            <h3><i className="fa fa-envelope" /> Write to us:</h3>
            <p className="m-0">We’ll write rarely, but only the best content.</p>
          </div>
        </div>
        <div className="card-body p-3">
          <div className="form-group">
            <label> Your name </label>
            <div className="input-group">
              <input defaultValue type="text" name="data[name]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Your name" size="30"/>
            </div>
          </div>
          <div className="form-group">
            <label>Your email</label>
            <div className="input-group mb-2 mb-sm-0">
              <input type="email" defaultValue name="data[email]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Email" />
            </div>
          </div>
          <div className="form-group">
            <label>Subject</label>
            <div className="input-group mb-2 mb-sm-0">
              <input type="text" name="data[subject]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Subject" />
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <div className="input-group mb-md-4 mb-sm-0">
              <textarea type="text" className="form-control" name="mesg" />
            </div>
          </div>
          <div className="text-center">
            <input type="submit" name="submit" defaultValue="submit" className="btn btn-primary btn-block rounded-0 py-2" />
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-7">
      <div className="mb-4">
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6915.826651343528!2d31.17852477412494!3d30.45791284107257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458389e3cd3ba87%3A0x6f4a5b1f9b48a9c5!2sBenha%2C%20Qism%20Banha%2C%20Banha%2C%20Al%20Qalyubia%20Governorate!5e0!3m2!1sen!2seg!4v1650727123499!5m2!1sen!2seg"
  width="100%"
  height="450"
  frameBorder="0"
  style={{ border: 0 }}
  allowFullScreen
  aria-hidden="false"
  tabIndex="0"
></iframe>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i className="fa fa-map-marker" /></a>
          <p> Your Address ….. </p>
        </div>
        <div className="col-md-4">
          <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i className="fa fa-phone" /></a>
          <p>+91- 90000000</p>
        </div>
        <div className="col-md-4">
          <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i className="fa fa-envelope" /></a>
          <p> your@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</section>

 </>
 
    )
  }
}
