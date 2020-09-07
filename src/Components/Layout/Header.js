import React, { Component } from 'react'
import logo from '../../images/logo.png'
export default class Header extends Component {
    render() {
        return (
            <div>
        <header id="Header">
        <nav className="main-navigation">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="logo">
                  <a href="www.google.com"><img src={logo} alt="Logo" /></a>
                </div>
              </div>
              <div className="col text-right">
                <div className="menu-wrap">
                  <div id="nav-icon1">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="mobile-menu">
          <ul>
            <li><a href="/about" className="smooth-scroll">Home</a></li>
            <li><a href="www.google.com" className="smooth-scroll">Improve your business </a></li>
            <li><a href="www.google.com" className="smooth-scroll">Video</a></li>
            <li><a href="www.google.com" className="smooth-scroll">Our Work</a></li>
            <li><a href="www.google.com" className="smooth-scroll">Get In Touch</a></li>
          </ul>
        </div>
      </header>
            </div>
        )
    }
}
