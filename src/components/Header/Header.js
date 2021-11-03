import React, { useState } from 'react';
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

        .nav-box, .download-box {
            width: 120px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0px 10px 0px 10px;
            cursor: pointer;
            text-decoration: none;

            .hover-box {
                display: flex;
                justify-content: center;
                align-items: center;
                transition: 0.5s ease all;

                &.about {
                    border-bottom: ${props => props.hovered === 'about' ? `1px solid #B2FFD6` : `1px solid transparent`};
                }
        
                &.experience {
                    border-bottom: ${props => props.hovered === 'experience' ? `1px solid #B2FFD6` : `1px solid transparent`};
                }
        
                &.portfolio {
                    border-bottom: ${props => props.hovered === 'portfolio' ? `1px solid #B2FFD6` : `1px solid transparent`};
                }
        
                &.contact {
                    border-bottom: ${props => props.hovered === 'contact' ? `1px solid #B2FFD6` : `1px solid transparent`};
                }
            }

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
                width: 100%;
                height: 100%;
                border-radius: 3px;
                border: 2px solid #B2FFD6;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: ${props => props.hovered === 'download' ? `#B2FFD6` : `transparent`};
                transition: 0.5s ease all;

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
                        color: ${props => props.hovered === 'download' ? `#202121` : `#B2FFD6`};
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
                        stroke: ${props => props.hovered === 'download' ? `#202121` : `#B2FFD6`};
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        fill: none;
                    }
                }
            }
        }

        .download-box {
            height: 35px;
        }
    }
`;

function Header() {

    const [hovered, setHovered] = useState('');

    return (
        <StyledHeader hovered={hovered}>
            <div className='navigation-container'>
                <a className='nav-box' href="#about" onPointerEnter={() => setHovered('about')} onPointerLeave={() => setHovered('')}>
                    <div className='hover-box about'>
                        <p><span>1. </span>About Me</p>
                    </div>
                </a>
                <a className='nav-box' href="#experience" onPointerEnter={() => setHovered('experience')} onPointerLeave={() => setHovered('')}>
                    <div className='hover-box experience'>
                        <p><span>2. </span>Experience</p>
                    </div>
                </a>
                <a className='nav-box' href="#portfolio" onPointerEnter={() => setHovered('portfolio')} onPointerLeave={() => setHovered('')}>
                    <div className='hover-box portfolio'>
                        <p><span>3. </span>Portfolio</p>
                    </div>
                </a>
                <a className='nav-box' onPointerEnter={() => setHovered('contact')} onPointerLeave={() => setHovered('')}>
                    <div className='hover-box contact'>
                        <p><span>4. </span>Contact Me</p>
                    </div>
                </a>
                <a href="https://docs.google.com/document/d/1-ZYgfoqER74Fhof5RPg1xxSGk43QATLV/edit?usp=sharing&ouid=114648167818125791159&rtpof=true&sd=true" target="#" className='download-box'>
                    <div className='download' onPointerEnter={() => setHovered('download')} onPointerLeave={() => setHovered('')}>
                        <div className='text'>
                            <p>Resume</p>
                        </div>
                        <div className='icon'>
                            <Download />
                        </div>
                    </div>
                </a>
            </div>
        </StyledHeader>
    );
}
  
export default Header;