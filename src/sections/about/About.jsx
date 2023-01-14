import React,{Component} from 'react'
import './About.css'

const About = () => {
  return (
    <div>
      <section id="about" class="about-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="box-shadow-full">
            <div class="title-box-2">
              <h5 class="title-left">
                About me
              </h5>
            </div>
              <div class="row">
                <div class="col-md-6">

                
                <img src="me.jpg" class="img-fluid rounded b-shadow-a img-mine mx-auto d-block" alt="Karthik Krishnan"></img>

                  <div class="row">
                    <div class="col-sm-6 col-md-5">
                      <div class="about-img">
                      
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
                <div class="col-md-6">
                  <div class="about-me pt-4 pt-md-0">
                  <p class="lead">
                      Hello World,</p>
                    <p class="lead">
                      I'm Karthik Krishnan, a 20 year old Computer Science student from Kerala.
                      My interests include Computer Vision, Artificial Intelligence, Machine Learning, Web Application Development, Software Design and Development and NLP.
                    </p>
                    <p class="lead">
                      I'm pursuing my degree in Computer Science Engineering wth specialization in Data Science from Vellore Institute of Technology.
                    </p>
                    <p class="lead">
                      I always believed in Learning by Doing. Everything I learnt are by working on it rather than memorizing the theory behind it. 
                      My thirst to explore the world of engineering took me here!! 
                    </p>
                    <p class="lead">
                      Happy Learning
                    </p>
                  </div>

                  <div class="login-box d-flex justify-content-center our-box">
                    <form>
                      <a href="https://drive.google.com/file/d/1KqmjbAXXHXfy4evqpmiivXdYxQqFRVQQ/view" role="button" rel="noreferrer" target="_blank">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      &nbsp;&nbsp;&nbsp; Resume &nbsp;&nbsp;&nbsp;
                      </a>
                    </form>
                   
                    
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

export default About
