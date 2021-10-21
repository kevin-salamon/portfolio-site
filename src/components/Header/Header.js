import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    height: 80px;
    width: 100vw;
    background-color: #EDB183;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
`;

function Header() {
    return (
        <StyledHeader>

        </StyledHeader>
    );
}
  
export default Header;