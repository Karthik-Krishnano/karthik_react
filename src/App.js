import './App.css';
import {Hero, Head, About, Resume, Skills, Projects, Awards, Contact, Footer} from './sections';

import React, { useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


function App() {

  const [theme, setTheme] = useState("light");

  var themeToggler = () => {
    console.log("Working")
    theme === "light" ? setTheme("dark") : setTheme("light");
  };


  return (

    <div>
      
    <div>

   
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
      <Head />
      <Hero />
      
    
    <StyledApp>
    <div class="tog-btn d-flex justify-content-center">
    <label class="toggle d-flex justify-content-center" >
        <input type="checkbox" onClick={() => themeToggler()} />
        <span class="slider" ></span>
        <span class="labels" data-on="Light Mode" data-off="Dark Mode"></span>
    </label>
    </div>


      <About />
      <Resume />
      <Skills />
      <Projects />
      <Awards />
      <Contact />
      
      </StyledApp>
      </ThemeProvider>
      <Footer />
    
      </div>
    </div>
  );
}

export default App;
