import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="Footer">
        <div className="container text-center">
          <div className="footer-text ">
            <p>Sign up for our free newsletter
              <br className="hidden-lg-down" /> We share the latest on building great companies and careers from around the Web.</p>
            <div className="email-box">
              <form action="#" method="post">
                <input required type="email" />
                <label htmlFor="email">Email</label>
                <input className="submit" type="submit" defaultValue />
              </form>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="copy-right">
                  <p>© Autarky technologies.</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-right">
                <div className="social-share">
                  <ul>
                    <li>
                      <i className="fab fa-facebook-f" />
                    </li>
                    <li>
                      <i className="fab fa-twitter" />
                    </li>
                    <li>
                      <i className="fab fa-linkedin-in" />
                    </li>
                    <li>
                      <i className="fab fa-pinterest" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="designed"></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
            </div>
        )
    }
}
