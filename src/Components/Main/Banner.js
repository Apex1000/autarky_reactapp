import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div>
        <section id="HeroBanner">
        <div id="BannerSlider" className="owl-carousel">
          <div className="item">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="banner-text">
                    <h1>Our work is dedicated to the<br /> prosperity of our clients! </h1>
                    <p> Lorem ipsum dolor sit amet, consec tetuer
                      <br /> adipiscing elit. Praesent vestibu lum molestie
                      <br />lacus. Aenean nonummy hendrerit
                      <br />maurishasellus </p>
                    <div className="bannet-cta">
                      <div className="cta-1">
                        {/* <a href="#">Click Here</a> */}
                      </div>
                      <div className="cta-2">
                        {/* <a href="#">Read More</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="banner-text">
                    <h1>Discover the Business Secrets for <br />Your SUCCESS!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur
                      <br />adipisicing elit. Labore sapiente cumque,
                      <br />sequi aperiam quae repellendus.</p>
                    <div className="bannet-cta">
                      <div className="cta-1">
                        {/* <a href="#">Click Here</a> */}
                      </div>
                      <div className="cta-2">
                        {/* <a href="#">Read More</a> */}
                      </div>
                    </div>
                  </div>
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
