import React, { useState } from 'react';
import styled from 'styled-components';
import About from './components/About';
import Experience from './components/Experience';
// import Portfolio from './components/Portfolio'
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Contact from './components/Contact';
import LogoSlot from './components/LogoSlot';
import store from './store';
import { Provider } from 'react-redux';

const StyledAppPage = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #191924;

  p {
    margin-block: 0px;
    user-select: none;
  }

  ::-webkit-scrollbar {
    width: 5px;
    transition: 0.3 ease all;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #888888;
    border-radius: 200px;
    transition: 0.3 ease all;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555555;
  }
`;

const StyledSectionContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;

  &.about-toplevel {
    top: 0;
  }

  &.experience-toplevel {
    top: 100vh;
  }

  // &.portfolio-toplevel {
  //   top: 200vh;
  // }

  &.contact-toplevel {
    top: 200vh;
  }

  .content-container {
    position: absolute;
    // background-color: white;
    left: 100px;
    width: calc(100% - 100px);
    top: 80px;
    height: calc(100% - 80px);

    @media (max-width: 450px) and (orientation: portrait) {
      left: 0px;
      width: 100%;
      top: 60px;
      height: calc(100% - 120px);
    }

    @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
      left: 60px;
      top: 60px;
      width: calc(100% - 60px);
      height: calc(100% - 60px);        
    }
  }
`;

const App = () => {

  const [scrollDown, setScrollDown] = useState(0);
  const [scrollFromBottom, setScrollFromBottom] = useState(0);

  return (
    <Provider store={store}>
      <StyledAppPage
        id="top-container"
        onScroll={() => {
          let container = document.getElementById('top-container');
          setScrollDown(container.scrollTop);
          let bottomDistance = container.scrollHeight - container.scrollTop;
          setScrollFromBottom(bottomDistance);
          // console.log(bottomDistance);
        }}
      >
        <Header scrollDown={scrollDown} />
        <Sidebar scrollFromBottom={scrollFromBottom} />
        <LogoSlot />
        <StyledSectionContainer id="about" className='about-toplevel'>
          <div className='content-container'>
            <About />
          </div>
        </StyledSectionContainer>
        <StyledSectionContainer id="experience" className='experience-toplevel'>
          <div className='content-container'>
            <Experience/>
          </div>
        </StyledSectionContainer>
        {/* <StyledSectionContainer id="portfolio" className='portfolio-toplevel'>
          <div className='content-container'>
            <Portfolio/>
          </div>
        </StyledSectionContainer> */}
        <StyledSectionContainer id="contact" className='contact-toplevel'>
          <div className='content-container'>
            <Contact/>
          </div>
        </StyledSectionContainer>
      </StyledAppPage>
    </Provider>
  );
}

export default App;
