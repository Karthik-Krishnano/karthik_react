import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div>
      <section id="projects" class="blog-mf sect-pt4 route">
        <br /><br /><br />
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">
                Projects
              </h3>
              <p class="subtitle-a">
                Some of my major projects are as follows
              </p>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="card card-blog">
              <div class="card-img">
                <img src="assets/img/Projects/Pratham.jpeg" alt="" class="img-fluid" />
              </div>
              <div class="card-body">
                <div class="card-category-box">
                </div>
                <h3 class="card-title">Autonomous Vehicle</h3>
                <p class="card-description">
                A Rover which can navigate through dynamic Environments. I worked on the computer vision aspects of the robot using <strong>CNN, YOLO, OpenCV, PyTorch, Jetson Inference, Detectron, ROS</strong>, etc.
                </p>

                <p ><a class="btn btn-primary btn js-scroll px-4" href="https://teamautoz.com/" role="button" rel="noreferrer" target="_blank">Learn More</a></p> 

              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card card-blog">
              <div class="card-img">
                <img src="assets/img/Projects/iGrow_model.png" alt="" class="img-fluid" />
              </div>
              <div class="card-body">
                <div class="card-category-box">
                </div>
                <h3 class="card-title">Food Computer</h3>
                <p class="card-description">
                An enclosure inside which the parameters are simulated by the computer customized for each plant. I worked on <strong>OpenCV-Python, HSV filtering, Django, HTML, CSS, JS, Bootstrap</strong>, etc.
                </p>

                <p ><a class="btn btn-primary btn js-scroll px-4" href="https://igrow-app.herokuapp.com/" role="button" rel="noreferrer" target="_blank">Learn More</a></p> 

              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card card-blog">
              <div class="card-img">
                <img src="assets/img/Projects/VA.jpg" alt="" class="img-fluid" />
              </div>
              <div class="card-body">
                <div class="card-category-box">
                </div>
                <h3 class="card-title">Virtual Assistant</h3>
                <p class="card-description">
                A virtual assistant for the disabled with audio, video (hand gestures) and text input. I worked on <strong>Flask API, Pyttsx3, Google Speech API, WolframAlpha API, OpenCV, YouTube API </strong>, etc. 
                </p>
                <p ><a class="btn btn-primary btn js-scroll px-4" href="https://github.com/Karthik-Krishnano/VIRTUAL-ASSISTANT" role="button" rel="noreferrer" target="_blank">Learn More</a></p> 
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}

export default Projects

//A virtual assistant for the disabled with audio, video (hand gestures) and text input. I worked on Flask API, Pyttsx3, Google Speech API, WolframAlpha API, OpenCV, YouTube Data API , etc.  
//An enclosure inside which the parameters are simulated by the computer customized for each plant. I worked on OpenCV-Python, HSV filtering, Django, HTML, CSS, JS, Bootstrap, etc. 
//A Rover which can navigate through dynamic Environments. I worked on the computer vision aspects of the robot using CNN, YOLO, OpenCV, PyTorch, Detectron, ROS, etc.

