import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { GitHub, Instagram, Linkedin } from 'react-feather';

const StyledContact = styled.div`
    height: 100%;
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    .centering-box {
        height: 60%;
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        @media (orientation: portrait) and (max-width: 950px) {
            width: 80%;
        }

        @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
            margin-bottom: 5%;
        }

        @media (max-width: 450px) and (orientation: portrait) {

        }

        .top {
            height: min-content;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1%;

            p {
                font-size: 44px;
                font-family: 'Merriweather Sans', sans-serif;
                color: white;
                position: relative;
                letter-spacing: 0.5px;

                @media (orientation: portrait) and (max-width: 950px) {
                    font-size: 30px;
                }

                @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
                    font-size: 16px;
                }

                @media (max-width: 450px) and (orientation: portrait) {
                    font-size: 20px;
                }
            }
        }

        .description {
            height: min-content;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1%;

            p {
                font-size: 24px;
                color: #B2FFD6;
                font-family: 'Space Mono', monospace;
                position: relative;
                text-align: center;

                @media (orientation: portrait) and (max-width: 950px) {
                    font-size: 19px;
                }

                @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
                    font-size: 13px;
                }

                @media (max-width: 450px) and (orientation: portrait) {
                    font-size: 14px;
                }
            }

            span {
                font-size: 26px;
                color: white;
                font-family: 'Space Mono', monospace;
                position: relative;
                text-align: center;
                text-decoration: underline;

                @media (orientation: portrait) and (max-width: 950px) {
                    font-size: 21px;
                }

                @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
                    font-size: 14px;
                }

                @media (max-width: 450px) and (orientation: portrait) {
                    font-size: 15px;
                }
            }

            a {
                text-decoration: none;
                font-size: 26px;
                color: white;
                font-family: 'Space Mono', monospace;
                position: relative;
                text-align: center;
                cursor: pointer;
                text-decoration: underline;
                transition: 0.15s ease all;

                &:hover {
                    color: #ebfff0;
                }

                @media (orientation: portrait) and (max-width: 950px) {
                    font-size: 21px;
                }

                @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
                    font-size: 14px;
                }

                @media (max-width: 450px) and (orientation: portrait) {
                    font-size: 15px;
                }
            }
        }

        .icon-container {
            height: 20%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: visible;

            .slidein-icons {
                width: 100%;
                height: 100%;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 0;

                &.start-animation {
                    animation: 1s ease;
                    animation-name: slideup;
                    animation-iteration-count: 1;
                }

                @keyframes slideup {
                    from {
                        opacity: 0;
                        top: 50%;
                    }
        
                    to {
                        opacity: 1;
                        top: 0;
                    }
                }

                .icon-box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 80px;
                    height: 80px;
                    margin: 5%;

                    @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
                        margin: 10%;
                    }

                    @media (max-width: 450px) and (orientation: portrait) {
                        margin: 10%;
                    }
    
                    a {
                        padding: 0px;
                        margin: 0px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 50px;
                        width: 50px;
                        transition: 0.2s ease all;

                        @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
                            height: 25px;
                            width: 25px;
                        }

                        @media (max-width: 450px) and (orientation: portrait) {
                            height: 25px;
                            width: 25px;
                        }
    
                        &:hover {
                            transform: scale(1.2, 1.2); 
                        }
    
                        svg {
                            height: 100%;
                            width: 100%;
                            stroke: white;
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

const Contact = ({
    setShowSidebar,
    showSidebar
}) => {

    const iconRef = useRef();

    useEffect(() => {
        let topLevelContainer = document.getElementById('top-container');
        topLevelContainer.addEventListener('scroll', () => {
            let iconBox = document.getElementById('slidein-icons').getBoundingClientRect().top;
            // console.log("ICON FROM TOP", iconBox);
            if (iconBox <= 750) {
                document.getElementById('slidein-icons').classList.add('start-animation');
            }
        });
    }, []);

    return (
        <StyledContact>
            <div className='centering-box'>
                <div className='top'>
                    <p>WANT TO REACH OUT?</p>
                </div>
                <div className='description'>
                    <p>
                        I'm always looking to hear new ideas, make connections, or talk about collaborating on a cool project!
                        If you'd like to talk more, shoot me an email at <span>theksalamon@gmail.com,</span> or send me a message on <a href="https://www.linkedin.com/in/kevin-salamon/" target="#">Linkedin</a>.
                    </p>
                </div>
                <div className='icon-container'>
                    <div className='slidein-icons' id='slidein-icons' ref={iconRef} onAnimationEnd={() => iconRef.current.style.opacity = 1}>
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
                            <a href="https://www.instagram.com/thekevinsalamon/" target="#">
                                <Instagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </StyledContact>
    );
}
  
export default Contact;