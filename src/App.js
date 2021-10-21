import styled from 'styled-components';
import About from './components/About/About.js';
import Experience from './components/Experience/Experience.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Header from './components/Header/Header.js';

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
  background-color: #480355;

  p {
    margin-block: 0px;
  }
`;

function App() {
  return (
    <StyledAppPage>
      <Header/>
      <Sidebar/>
      <About/>
      <Experience/>
    </StyledAppPage>
  );
}

export default App;
