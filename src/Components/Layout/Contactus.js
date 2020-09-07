import React, { Component } from 'react'

export default class Contactus extends Component {
    render() {
        return (
            <div>
                <section id="ContactUs">
        <div className="container contact-container">
          <h3 className="contact-title">Get In Touch</h3>
          <div className="contact-outer-wrapper">
            <div className="form-wrap">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <form action="#" method="post">
                <div className="fname floating-label">
                  <input type="text" required className="floating-input" name="full name" />
                  <label htmlFor="title">Full Name</label>
                </div>
                <div className="email floating-label">
                  <input type="email" required className="floating-input" name="email" />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="contact floating-label">
                  <input type="tel" className="floating-input" name="contact" />
                  <label htmlFor="email" required>Contact</label>
                </div>
                <div className="company floating-label">
                  <input type="text" className="floating-input" name="company" />
                  <label htmlFor="email">Company</label>
                </div>
                <div className="user-msg floating-label">
                  <textarea type="text" className="floating-input" name="Message" defaultValue={""} />
                  <label htmlFor="message" className="msg-label">Your Message</label>
                </div>
                <div className="submit-btn">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
            <div className="address-block">
              <p className="add-title">Contact Details</p>
              <div className="c-detail">
                <div className="c-icon"><i className="fas fa-address-book" aria-hidden="true" /></div>
                <div className="c-info">
                  <h4>Address</h4>
                  <p>#001 bridge Road, RST City, USA</p>
                </div>
              </div>
              <div className="c-detail">
                <div className="c-icon"><i className="fas fa-phone-square" aria-hidden="true" /></div>
                <div className="c-info">
                  <h4>Mobile</h4>
                  <p><a href="tell:+1234567890">+1234567890</a></p>
                </div>
              </div>
              <div className="c-detail">
                <div className="c-icon"><i className="fas fa-envelope" aria-hidden="true" /></div>
                <div className="c-info">
                  <h4>Email</h4>
                  <p><a href="mailto:abc@abc.com">abc@abc.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            </div>
        )
    }
}
