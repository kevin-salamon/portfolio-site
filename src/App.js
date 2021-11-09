import styled from 'styled-components';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio'
import Sidebar from './components/Sidebar';
import Header from './components/Header';
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

  .content-container {
    position: absolute;
    // background-color: white;
    left: 100px;
    width: calc(100% - 100px);
    top: 80px;
    height: calc(100% - 80px);
  }
`;

function App() {
  return (
    <Provider store={store}>
      <StyledAppPage>
        <Header/>
        <Sidebar/>
        <StyledSectionContainer style={{top: 0}} id="about">
          <div className='content-container'>
            <About />
          </div>
        </StyledSectionContainer>
        <StyledSectionContainer style={{top: '100vh'}} id="experience">
          <div className='content-container'>
            <Experience/>
          </div>
        </StyledSectionContainer>
        <StyledSectionContainer style={{top: '200vh'}} id="portfolio">
          <div className='content-container'>
            <Portfolio/>
          </div>
        </StyledSectionContainer>
      </StyledAppPage>
    </Provider>
  );
}

export default App;
