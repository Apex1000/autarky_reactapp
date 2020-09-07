import React, { Component } from 'react'
import video from '../../images/video1.jpg'
import videoimg from '../../images/video.jpg'
export default class Main extends Component {
    render() {
        return (
            <div>
                <section id="Gain">
        <div className="container">
          <div className="title text-center">
            <h3>Gain The Knowledge you Need to Succeed</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sapiente cumque est, quaerat sequi aperiam quae repellendus. Aspernatur corrupti eos quam beatae, voluptatibus nemo distinctio ad suscipit, et officia velit.</p>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="each-icon box-1">
                <div className="icon-wrap">
                  <i className="fa fa-cogs" />
                </div>
                <div className="icon-text">
                  <h3>Title</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sapiente cumque est, quaerat sequi aperiam quae repellendus. Aspernatur corrupti eos quam beatae, voluptatibus nemo distinctio ad suscipit, et officia velit.</p>
                  <div className="cta">
                    {/* <a title="Read More" href="/"><i className="fa fa-arrow-right" aria-hidden="true" /></a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="each-icon box-2">
                <div className="icon-wrap">
                  <i className="fa fa-chart-pie" />
                </div>
                <div className="icon-text">
                  <h3>Title</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sapiente cumque est, quaerat sequi aperiam quae repellendus. Aspernatur corrupti eos quam beatae, voluptatibus nemo distinctio ad suscipit, et officia velit.</p>
                  <div className="cta">
                    {/* <a title="Read More" href="#"><i className="fa fa-arrow-right" aria-hidden="true" /></a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="each-icon box-3">
                <div className="icon-wrap">
                  <i className="fa fa-tachometer-alt" />
                </div>
                <div className="icon-text">
                  <h3>Title</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sapiente cumque est, quaerat sequi aperiam quae repellendus. Aspernatur corrupti eos quam beatae, voluptatibus nemo distinctio ad suscipit, et officia velit.</p>
                  <div className="cta">
                    {/* <a title="Read More" href="#"><i className="fa fa-arrow-right" aria-hidden="true" /></a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="each-icon box-4">
                <div className="icon-wrap">
                  <i className="fa fa-cubes" />
                </div>
                <div className="icon-text">
                  <h3>Title</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sapiente cumque est, quaerat sequi aperiam quae repellendus. Aspernatur corrupti eos quam beatae, voluptatibus nemo distinctio ad suscipit, et officia velit.</p>
                  <div className="cta">
                    {/* <a title="Read More" href="#"><i className="fa fa-arrow-right" aria-hidden="true" /></a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Laptop">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="laptop-text">
                  <h2>Improve your business<br className="d-none d-lg-none d-xl-block" /> today!</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae assumenda explicabo delectus totam ex ratione dolorem, recusandae temporibus illum cupiditate, ab labore architecto. Deserunt officiis, iusto culpa aperiam, obcaecati corporis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae assumenda explicabo delectus totam ex ratione dolorem, recusandae temporibus illum cupiditate, ab labore architecto.</p>
                  {/* <a href="#">Read More</a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Laptop section ends here */}
        {/* video section starts here */}
        <section id="Video">
          <div className="image-wrap">
            <picture>
              <source media="(max-width: 767px)" srcSet={video} />
              <img src={videoimg} alt="Video Thumbnail" />
            </picture>
          </div>
          <div className="video-icon">
            <h3>Video</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              <br className="d-none d-lg-none d-xl-block" />Labore sapiente cumque est, quaerat sequi aperiam quae repellendus.</p>
            <a className="popup-youtube-wst" href="https://www.youtube.com/watch?v=ScMzIvxBSi4"><i className="fas fa-play" /></a>
          </div>
        </section>
        {/* video section ends here */}
        <section id="OurWork" className="clearfix">
          <div className="container">
            <div className="title text-center">
              <h3>Our Work</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sapiente cumque est, quaerat sequi aperiam quae repellendus. Aspernatur corrupti eos quam beatae, voluptatibus nemo distinctio ad suscipit, et officia velit.</p>
            </div>
          </div>
          <div className="filter-list">
            <ul>
              <li className="active" data-filter="all">All
              </li>
              <li data-filter="branding">Branding
              </li>
              <li data-filter="marketing">Marketing
              </li>
              <li data-filter="media">Media
              </li>
              <li data-filter="photography">Photography
              </li>
              <li data-filter="web-design">Web Design
              </li>
            </ul>
          </div>
        </section>
            </div>
        )
    }
}
