import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/ks_final.png';

const StyledLogoSlot = styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
    height: 100px;
    width: 100px;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    background-color: transparent;
    user-select: none;

    @media (max-width: 1150px) and (orientation: landscape) {
        height: 80px;
        width: 80px;
    }

    @media (orientation: portrait) and (max-width: 950px) {
        height: 80px;
        width: 80px;
    }

    @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
        display: none;
    }

    @media (max-width: 450px) and (orientation: portrait) {
        display: none;
    }

    img {
        object-fit: contain;
        width: 100%;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }
`;

const LogoSlot = () => {

    return (
        <StyledLogoSlot>
            <img src={logo} alt="logo"/>
        </StyledLogoSlot>
    );
}
  
export default LogoSlot;