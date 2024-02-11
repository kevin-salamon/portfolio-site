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
    transition: 0.3s ease all;
    background-color: ${props => props.scrollDown >= 250 ? `#191924D9` : `#19192400`};

    @media (max-width: 450px) and (orientation: portrait) {
        height: 60px;
        justify-content: center;
    }

    @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
        height: 60px;
        justify-content: flex-end;     
    }

    .logo-box {
        width: 80px;
        height: 80px;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        object-fit: contain;

        img {
            object-fit: contain;
            height: 100%;
            width: auto;
        }
    }

    .navigation-container {
        width: min-content;
        height: 70%;
        margin-right: 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        @media (orientation: portrait) and (max-width: 950px) {
            margin-right: 15px;
        }

        @media (max-width: 450px) and (orientation: portrait) {
            margin-right: 0px;
            justify-content: center;
            width: 100%;
            justify-content: space-evenly;
        }

        @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
            margin-right: 0px;
        }

        .nav-box, .download-box {
            width: 120px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0px 10px 0px 10px;
            cursor: pointer;
            text-decoration: none;

            @media (orientation: portrait) and (max-width: 950px) {
                width: 100px;
            }

            @media (max-width: 450px) and (orientation: portrait) {
                width: 60px;
                margin: 0px 5px;
            }

            @media (max-width: 710px) and (max-height: 410px) and (orientation: landscape) {
                width: 100px;
            }

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
                color: white;
                font-family: 'Space Mono', monospace;
                user-select: none;

                @media (orientation: portrait) and (max-width: 950px) {
                    font-size: 11px;
                }

                @media (max-width: 450px) and (orientation: portrait) {
                    font-size: 7px;
                }

                @media (max-width: 710px) and (max-height: 410px) and (orientation: landscape) {
                    font-size: 11px;
                }
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

                        @media (orientation: portrait) and (max-width: 950px) {
                            font-size: 11px;
                        }

                        @media (max-width: 450px) and (orientation: portrait) {
                            font-size: 7px;
                        }
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

const Header = ({ 
    scrollDown 
}) => {

    const [hovered, setHovered] = useState('');

    const handleFileDownload = () => {
        const url = process.env.PUBLIC_URL + '/Resume.pdf';
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
            'download',
            `KevinSalamon_Resume.pdf`,
        );
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);

    }

    return (
        <StyledHeader hovered={hovered} scrollDown={scrollDown}>
            <div className='logo-box'>

            </div>
            <div className='navigation-container'>
                <a className='nav-box' href="#about" onPointerEnter={() => setHovered('about')} onPointerLeave={() => setHovered('')}>
                    <div className='hover-box about'>
                        <p><span></span>About Me</p>
                    </div>
                </a>
                <a className='nav-box' href="#experience" onPointerEnter={() => setHovered('experience')} onPointerLeave={() => setHovered('')}>
                    <div className='hover-box experience'>
                        <p><span></span>Experience</p>
                    </div>
                </a>
                <a className='nav-box' href="#portfolio" onPointerEnter={() => setHovered('portfolio')} onPointerLeave={() => setHovered('')}>
                    <div className='hover-box portfolio'>
                        <p><span></span>Portfolio</p>
                    </div>
                </a>
                <a className='nav-box' href="#contact" onPointerEnter={() => setHovered('contact')} onPointerLeave={() => setHovered('')}>
                    <div className='hover-box contact'>
                        <p><span></span>Contact Me</p>
                    </div>
                </a>
                <div onClick={() => handleFileDownload()} className='download-box'>
                    <div className='download' onPointerEnter={() => setHovered('download')} onPointerLeave={() => setHovered('')}>
                        <div className='text'>
                            <p>Resume</p>
                        </div>
                        <div className='icon'>
                            <Download />
                        </div>
                    </div>
                </div>
            </div>
        </StyledHeader>
    );
}
  
export default Header;