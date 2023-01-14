import React from 'react'
import "./Resume.css"

const Resume = () => {
  return (
    <div>
      <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">
      <br /> <br /> <br /> <br /> <br />
      <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">
              Resume
              </h3>
              <p class="subtitle-a">
              A short summary of my Academic and Professional Journey.
              </p>
              <div class="line-mf"></div>
            </div>
          </div>

        <div class="row">
         




          <div class="col-lg-6">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">

            <a href="https://teamautoz.com/" role="button" rel="noreferrer" target="_blank">
              <h4>Team AutoZ</h4>
            </a>
            
              <h5>Head of Artificial Intelligence      (Aug 2022 - Present)
              <br />Computer Vision Engineer      (Dec 2020 - Aug 2022)</h5>

              <a href="https://goo.gl/maps/CC88KopimCAWEmV17" role="button" rel="noreferrer" target="_blank">
              <p><i class="bi bi-geo-alt" />
                <em>&nbsp;&nbsp;Vellore, Tamil Nadu </em></p>
                </a>
              <ul>
                <li>Works on developing computer vision softwares for VIT'S first fully autonomous rover capable of mappling its environment and performing SLAM.</li>
                <li>Works on OpenCV-Python, YOLO, Detectron2, Pytorch, etc for Image processing tasks like Object Detection, Localization, Segmentation, Classification,etc and Website Development.</li>
                </ul>
            </div>

            <div class="resume-item">

            <a href="https://vit.ac.in/centers/arc" role="button" rel="noreferrer" target="_blank">
              <h4>Autonomous Research Center</h4>
            </a>
            
              <h5>Software Development Head      (Jan 2023 - Present)
              <br />Software Developer      (Aug 2022 - Jan 2023)</h5>

              <a href="https://goo.gl/maps/CC88KopimCAWEmV17" role="button" rel="noreferrer" target="_blank">
              <p><i class="bi bi-geo-alt" />
                <em>&nbsp;&nbsp;Vellore, Tamil Nadu </em></p>
                </a>
              <ul>
                <li>Researching on Computer Vision and Image processing stack for the L3 Autonomous Car of VIT using OpenCV-Python, YOLO, Detectron2, Pytorch, etc for Image processing tasks like Object Detection, Localization, Segmentation, Classification,etc and Website Development.</li>
                </ul>
            </div>

            <div class="resume-item">
            <a href="https://curiousjr.com/" role="button" rel="noreferrer" target="_blank">
              <h4>CuriousJr</h4>
            </a>

              <h5>SDE Intern (Feb 2022 - July 2022)</h5>
              
              <p><i class="bi bi-geo-alt"></i>
              <em>&nbsp;&nbsp;Remote</em></p>
              <ul>
                <li>Worked with the Software Development team to develop responsive mobile applications for the CuriousJr App.</li>
                <li>Worked on Blockly, JQuery, JavaScript, HTML, CSS, BOOTSTRAP, git to develop block coding applications for kids. </li>
                <li>Wrote scripts on various computer science concepts and CuriousJr applications.</li>
              </ul>
            </div>
          </div>

           <div class="col-lg-6">
            
            <h3 class="resume-title">Education</h3>
            
            <div class="resume-item">
            <a href="https://vit.ac.in/" role="button" rel="noreferrer" target="_blank">
              <h4>VELLORE INSTITUTE OF TECHNOLOGY</h4>
              </a>
              <h5>Computer Science Engineering with specialization in Data Science  <br />(Sept 2020 - Present)</h5>

              <a href="https://goo.gl/maps/ktLCAo5ptbsRER3UA" role="button" rel="noreferrer" target="_blank">
              <p><i class="bi bi-geo-alt"></i>
              <em>&nbsp;&nbsp;Vellore, Tamil Nadu</em></p>
              </a>
              <p>Persuing my degree in Computer Science and Engineering, I got the oppertunity to participate in various technical events and competitions and interact with experts all around the world.</p>
            </div>
            

            <div class="resume-item">

            <a href="https://ezhimala.kvs.ac.in/" role="button" rel="noreferrer" target="_blank">
              <h4>Kendriya Vidyalaya</h4>
            </a>

              <h5>Higher Secondary Education <br />(July 2018 - Mar 2020)</h5>

            <a href="https://goo.gl/maps/J7qFptdpC5XkgCxo8" role="button" rel="noreferrer" target="_blank">
              <p><i class="bi bi-geo-alt"></i>
              <em>&nbsp;&nbsp;Ezhimala, Kerala</em></p>
            </a>
              <p>KV Ezhimala situated in the heart of the Indian Naval Academy, sculpted the Computer Science enthusiast in me. This is where I started my journey in Engineering by writing my first "Hello World" in Python, flashing my first "LED Blink code" in an Arduino UNO and many more.</p>
            </div>

            <div class="resume-item">
            <a href="https://www.alphonsacs.org/" role="button" rel="noreferrer" target="_blank">
              <h4>Alphonsa Central School</h4>
            </a>

              <h5>Primary &amp; Secondary Education <br />(June 2006 - Mar 2018)</h5>

              <a href="https://goo.gl/maps/WF3MKqfsbs4uzERo9" role="button" rel="noreferrer" target="_blank">
              <p><i class="bi bi-geo-alt"></i>
              <em>&nbsp;&nbsp;Kunhimangalam, Kerala</em></p>
              </a>
              <p>This is where I transformed from an interovert who pulled himsef back from the world to a leader who not only moves towards success but also pushes his fellow mates to the path to success.</p>
            </div>
          </div>


        </div>
        <br />


        
      </div>
    </section>
    </div>
  )
}

export default Resume
