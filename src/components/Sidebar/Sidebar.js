import React from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.div`
    height: calc(100vh - 80px);
    width: 100px;
    background-color: #B2FFD6;
    position: fixed;
    left: 0;
    top: 80px;
    z-index: 1;
`;

function Sidebar() {
    return (
        <StyledSidebar>

        </StyledSidebar>
    );
}
  
export default Sidebar;