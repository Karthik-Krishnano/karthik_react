import React, { Component } from 'react'
import './Head.css';

import {Link} from "react-scroll";


class Head extends Component {
  componentDidMount() {
  }
  render() {
//const Head = () => {
  return (
    <div>

        <header id="header" className="fixed-top ">
          <div className="container d-flex align-items-center justify-content-between">
          <a href="index.html" class="logo"> <img src="logo.png" alt="" class="img-fluid"></img>
          <h1 className="logo"><a href="index.html">Karthik Krishnan</a></h1></a>
            
            
            <nav id="navbar" className="navbar">
              <ul>
                <li ><Link to="hero" spy={true} smooth={true} offset={0} duration={500} isDynamic={true} ignoreCancelEvents={true}>
                <a className="nav-link scrollto active"></a>
                Home</Link></li>

                <li><Link to="about" spy={true} smooth={true} offset={0} duration={500}>
                About</Link></li>

                <li><Link to="resume" spy={true} smooth={true} offset={0} duration={500}>
                Resume</Link></li>

                <li><Link to="skills" spy={true} smooth={true} offset={24} duration={500}>
                Skills</Link></li>

                <li><Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
                Projects</Link></li>

                <li><Link to="awards" spy={true} smooth={true} offset={60} duration={500}>
                Awards</Link></li>

                <li><Link to="contact" spy={true} smooth={true} offset={60} duration={500}>
                Contact</Link></li>


              {/*
                <li><a className="nav-link scrollto active" href="google.com">Home</a></li>
                <li><a className="nav-link scrollto" href="google.com">About</a></li>
                <li><a className="nav-link scrollto" href="google.com">Resume</a></li>
                <li><a className="nav-link scrollto " href="google.com">Skills</a></li>
                <li><a className="nav-link scrollto " href="google.com">Projects</a></li>
                <li><a className="nav-link scrollto " href="google.com">Awards</a></li>
                <li><a className="nav-link scrollto" href="google.com">Contact</a></li>

                <i className="bi bi-list mobile-nav-toggle"></i>
              */}

              </ul>
              
              
            </nav>

          </div>
        </header>
    </div>
  );
  }
}

export default Head
