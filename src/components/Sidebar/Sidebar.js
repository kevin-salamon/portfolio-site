import React from 'react';
import styled from 'styled-components';
import { GitHub, Instagram, Linkedin } from 'react-feather';

const StyledSidebar = styled.div`
    height: calc(100vh - 80px);
    width: 100px;
    position: fixed;
    left: 0;
    top: 80px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .content-box {
        width: 70%;
        height: 45%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;

        .favicon-container {
            width: 100%;
            height: 60%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .icon-box {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 60px;

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

            div {
                height: 100%;
                width: 2px;
                background-color: #B2FFD6;
            }
        }
    }
`;

function Sidebar() {

    return (
        <StyledSidebar>
            <div className='content-box'>
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