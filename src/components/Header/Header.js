import React from 'react';
import styled from 'styled-components';
import { Download } from 'react-feather';

const StyledHeader = styled.div`
    height: 80px;
    width: 100vw;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .navigation-container {
        width: min-content;
        height: 70%;
        margin-right: 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .nav-box {
            width: 120px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0px 10px 0px 10px;
            cursor: pointer;

            span {
                margin-block: 0px;
                color: #B2FFD6;
                font-family: 'Space Mono', monospace;
                color: white;
                user-select: none;
            }

            p {
                font-size: 13px;
                margin-block: 0px;
                color: #B2FFD6;
                font-family: 'Space Mono', monospace;
                user-select: none;
            }

            .download {
                width: 90%;
                height: 80%;
                border-radius: 8px;
                border: 2px solid #B2FFD6;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;

                .text {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    width: 70%;
                    padding-left: 2px;

                    p {
                        font-size: 14px;
                        margin-block: 0px;
                        color: #B2FFD6;
                        font-family: 'Space Mono', monospace;
                    }
                }

                .icon {
                    display: flex;
                    justify-content: center;
                    padding-right: 5px;
                    align-items: center;
                    height: 100%;
                    width: 30%;

                    svg {
                        height: 20px;
                        width: 20px;
                        stroke: #B2FFD6;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        fill: none;
                    }
                }
            }
        }
    }
`;

function Header() {

    return (
        <StyledHeader>
            <div className='navigation-container'>
                <div className='nav-box'>
                    <div className='download'>
                        <div className='text'>
                            <p>Resume</p>
                        </div>
                        <div className='icon'>
                            <Download />
                        </div>
                    </div>
                </div>
                <div className='nav-box'>
                    <p><span>1. </span>About Me</p>
                </div>
                <div className='nav-box'>
                    <p><span>2. </span>Experience</p>
                </div>
                <div className='nav-box'>
                    <p><span>3. </span>Portfolio</p>
                </div>
                <div className='nav-box'>
                    <p><span>4. </span>Contact Me</p>
                </div>
            </div>
        </StyledHeader>
    );
}
  
export default Header;