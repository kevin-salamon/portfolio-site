import React from 'react';
import styled from 'styled-components';
import { GitHub, Instagram, Linkedin } from 'react-feather';

const StyledSidebar = styled.div`
    height: calc(100vh - 60px);
    width: 100px;
    position: fixed;
    left: 0;
    top: 60px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    transition: 0.3s ease all;

    @media (max-width: 450px) and (orientation: portrait) {
        height: 60px;
        width: 100vw;
        left: 0;
        top: auto;
        bottom: 0;
        align-items: center;
        background-color: ${props => props.scrollFromBottom <= 1000 ? `#19192400` : `#191924D9`};
    }

    @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
        width: 60px;
    }

    .content-box {
        width: 70%;
        height: 45%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        position: absolute;

        @media (max-width: 450px) and (orientation: portrait) {
            width: 100%;
            height: 100%;
            justify-content: center;
            flex-direction: row;
        }

        @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
            height: 100%;
        }

        .favicon-container {
            width: 100%;
            height: 60%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            @media (max-width: 450px) and (orientation: portrait) {
                height: 100%;
                flex-direction: row;
            }

            .icon-box {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 60px;

                @media (max-width: 450px) and (orientation: portrait) {
                    height: 100%;
                }

                a {
                    padding: 0px;
                    margin: 0px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 30px;
                    width: 30px;
                    transition: 0.2s ease all;

                    &:hover {
                        transform: scale(1.2, 1.2); 
                    }

                    svg {
                        height: 100%;
                        width: 100%;
                        stroke: #B2FFD6;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        fill: none;
                    }
                }
            }
        }

        .line-container {
            height: 40%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            @media (max-width: 450px) and (orientation: portrait) {
                display: none;
            }

            div {
                height: 100%;
                width: 2px;
                background-color: #B2FFD6;
            }
        }
    }
`;

const Sidebar = ({
    scrollFromBottom,
    showSidebar
}) => {

    return (
        <StyledSidebar scrollFromBottom={scrollFromBottom}>
            <div className='content-box' id='content-box'>
                <div className='favicon-container'>
                    <div className='icon-box'>
                        <a href="https://github.com/kevin-salamon" target="#">
                            <GitHub />
                        </a>
                    </div>
                    <div className='icon-box'>
                        <a href="https://www.linkedin.com/in/kevin-salamon/" target="#">
                            <Linkedin />
                        </a>
                    </div>
                    <div className='icon-box'>
                        <a href="https://www.instagram.com/kevinisrfk/" target="#">
                            <Instagram />
                        </a>
                    </div>
                </div>
                <div className='line-container'>
                    <div/>
                </div>
            </div>
        </StyledSidebar>
    );
}
  
export default Sidebar;