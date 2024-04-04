import React, { useRef } from 'react';
import styled from 'styled-components';
import profile from '../../assets/images/profile.jpg';

const StyledAbout = styled.div`
    height: 100%;
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (orientation: portrait) {
        flex-direction: column-reverse;
    }

    .about-container {
        height: 100%;
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (orientation: portrait) {
            height: 40%;
            width: 100%;
        }

        @media (max-width: 450px) and (orientation: portrait) {
            height: 60%;
        }

        @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
            padding-bottom: 5%;       
        }

        .about-box {
            height: 75%;
            width: 90%;
            // background-color: #32013b;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            @media (max-width: 1367px) and (orientation: landscape) {
                // width: 80%;
            }

            @media (max-width: 1150px) and (orientation: landscape) {

            }

            @media (orientation: portrait) {
                height: 100%;
            }

            @media (max-width: 450px) and (orientation: portrait) {
                padding-bottom: 8%;
            }

            div {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                width: 100%;
                padding-left: 10%;

                @media (orientation: portrait) {
                    padding-left: 0%;
                }
            }

            p, span {
                margin-block: 0px;
                color: #B2FFD6;
                font-family: 'Space Mono', monospace;
                text-align: left;
            }

            .intro {
                p {
                    font-size: 30px;

                    @media (max-width: 1367px) and (orientation: landscape) {
                        // font-size: 24px;
                    }

                    @media (max-width: 1150px) and (orientation: landscape) {
                        font-size: 20px;
                    }

                    @media (orientation: portrait) and (max-width: 950px) {
                        font-size: 20px;
                    }

                    @media (max-width: 450px) and (orientation: portrait) {
                        font-size: 16px;
                    }

                    @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
                        font-size: 16px;
                    }
                }

                span {
                    font-size: 64px;
                    font-family: 'Merriweather Sans', sans-serif;
                    color: white;
                    // text-shadow: 1px 1px 2px #B2FFD6;
                    position: relative;

                    @media (max-width: 1367px) and (orientation: landscape) {
                        // font-size: 51px;
                    }

                    @media (max-width: 1150px) and (orientation: landscape) {
                        font-size: 44px;
                    }

                    @media (orientation: portrait) and (max-width: 950px) {
                        font-size: 44px;
                    }

                    @media (max-width: 450px) and (orientation: portrait) {
                        font-size: 32px;
                    }

                    @media (max-width: 380px) and (orientation: portrait) {

                    }

                    @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
                        font-size: 32px;
                    }

                    @media (max-width: 710px) and (max-height: 410px) and (orientation: landscape) {
                        font-size: 28px;
                    }

                    section {
                        height: 100%;
                        width: 100%;
                        position: absolute;
                        z-index: 1;
                        background-color: transparent;
                        top: 0;
                        right: 0;
                        border-bottom: 1px solid #FFFFFFBF;
                        animation-duration: 0.75s;
                        animation-name: slidein-right;
                        animation-delay: 0.5s;
                        animation-iteration-count: 1;
                        opacity: 0;
                    }

                    @keyframes slidein-right {
                        from {
                            opacity: 0;
                            right: 200%;
                        }

                        to {
                            opacity: 1;
                            right: 0;
                        }
                    }
                }
            }

            .tagline {
                p {
                    font-size: 20px;
                    color: #B2FFD6;

                    @media (max-width: 1367px) and (orientation: landscape) {
                        // font-size: 16px;
                    }

                    @media (max-width: 1150px) and (orientation: landscape) {
                        font-size: 16px;
                    }

                    @media (orientation: portrait) and (max-width: 950px) {
                        font-size: 16px;
                    }

                    @media (max-width: 450px) and (orientation: portrait) {
                        font-size: 10px;
                    }

                    @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
                        font-size: 10px;
                    }
                }

                span {
                    font-size: 30px;
                    color: white;
                    font-family: 'Merriweather Sans', sans-serif;
                    // text-shadow: 1px 1px 1px #B2FFD6;
                    position: relative;

                    @media (max-width: 1367px) and (orientation: landscape) {
                        // font-size: 24px;
                    }

                    @media (max-width: 1150px) and (orientation: landscape) {
                        font-size: 24px;
                    }

                    @media (orientation: portrait) and (max-width: 950px) {
                        font-size: 24px;
                    }

                    @media (max-width: 450px) and (orientation: portrait) {
                        font-size: 18px;
                    }

                    @media (max-width: 380px) and (orientation: portrait) {
                        font-size: 15px;
                    }

                    @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
                        font-size: 15px;
                    }

                    section {
                        height: 100%;
                        width: 100%;
                        position: absolute;
                        z-index: 1;
                        background-color: transparent;
                        top: 0;
                        left: 0;
                        border-bottom: 1px solid #FFFFFFBF;
                        animation-duration: 0.75s;
                        animation-name: slidein-left;
                        animation-delay: 0.5s;
                        animation-iteration-count: 1;
                        opacity: 0;
                    }

                    @keyframes slidein-left {
                        from {
                            opacity: 0;
                            left: 200%;
                        }

                        to {
                            opacity: 1;
                            left: 0;
                        }
                    }
                }
            }

            .description {
                margin-top: 20px;

                p {
                    font-size: 16px;
                    color: white;

                    @media (max-width: 1367px) and (orientation: landscape) {
                        font-size: 14px;
                    }

                    @media (max-width: 1150px) and (orientation: landscape) {
                        font-size: 13px;
                    }

                    @media (max-width: 450px) and (orientation: portrait) {
                        font-size: 11px;
                    }

                    @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
                        font-size: 11px;
                    }

                    @media (max-width: 710px) and (max-height: 410px) and (orientation: landscape) {
                        font-size: 9px;
                    }
                }

                &.after {
                    margin-top: 10px;
                }
            }
        }
    }

    .portrait-container {
        height: 100%;
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (orientation: portrait) {
            height: 40%;
            width: 100%;
        }

        @media (max-width: 450px) and (orientation: portrait) {
            height: 30%;
        }

        @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
            padding-bottom: 5%;   
        }

        .portrait-box {
            height: 50%;
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            object-fit: contain;
            user-select: none;

            @media (max-width: 1367px) and (orientation: landscape) {
                width: 40%;
                height: 40%;
            }

            @media (orientation: portrait) {
                height: 90%;
                width: 90%;
            }

            @media (max-width: 815px) and (max-height: 550px) and (orientation: landscape) {
                width: 50%;
                height: 50%;
            }

            img {
                height: 100%;
                width: auto;
                max-height: 100%;
                object-fit: contain;
                border-radius: 50%;
                box-shadow: 0px 0px 16px 2px white;
            }
        }
    }
`;

function About() {

    const underlineRefOne = useRef();
    const underlineRefTwo = useRef();

    // useEffect(() => {
        
    // }, []);

    return (
        <StyledAbout id="about">
            <div className='about-container'>
                <div className='about-box'>
                    <div className='intro'>
                        <p>Hi, I'm <span>Kevin Salamon<section ref={underlineRefOne} onAnimationEnd={() => underlineRefOne.current.style.opacity = 1}/></span></p>
                    </div>
                    <div className='tagline'>
                        <p>your friendly neighborhood <span>Software Engineer.<section ref={underlineRefTwo} onAnimationEnd={() => underlineRefTwo.current.style.opacity = 1}/></span></p>
                    </div>
                    <div className='description'>
                        <p>
                            I use the React.js web stack, Python + Flask, and cloud computing services like AWS and Azure to construct polished and comprehensive enterprise software.
                            I'm based in Manhattan, and currently work as an engineer for a leading market analytics company in Midtown.
                        </p>
                    </div>
                    <div className='description after'>
                        <p>
                            When not working, you can probably find me listening to a history podcast, brushing up on my Japanese, or getting way too animated about a Penn State football
                            game.
                        </p>
                    </div>
                </div>
            </div>
            <div className='portrait-container'>
                <div className='portrait-box'>
                    <img src={profile} alt='profile' />
                </div>
            </div>
        </StyledAbout>
    );
}
  
export default About;