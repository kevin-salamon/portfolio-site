import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import profile from '../../assets/images/profile.jpg';

const StyledAbout = styled.div`
    height: 100%;
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    .about-container {
        height: 100%;
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;

        .about-box {
            height: 75%;
            width: 90%;
            // background-color: #32013b;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            div {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                width: 100%;
                padding-left: 10%;
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
                }

                span {
                    font-size: 64px;
                    font-family: 'Merriweather Sans', sans-serif;
                    color: white;
                    // text-shadow: 1px 1px 2px #B2FFD6;
                    position: relative;

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
                }

                span {
                    font-size: 30px;
                    color: white;
                    font-family: 'Merriweather Sans', sans-serif;
                    // text-shadow: 1px 1px 1px #B2FFD6;
                    position: relative;

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

        .portrait-box {
            height: 50%;
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            object-fit: contain;

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

    useEffect(() => {
        setTimeout(() => {
            underlineRefOne.current.style.opacity = 1;
            underlineRefTwo.current.style.opacity = 1;
        }, 1000);
    }, []);

    return (
        <StyledAbout id="about">
            <div className='about-container'>
                <div className='about-box'>
                    <div className='intro'>
                        <p>Hi, I'm <span>Kevin Salamon<section ref={underlineRefOne}/></span></p>
                    </div>
                    <div className='tagline'>
                        <p>your friendly neighborhood <span>Software Engineer.<section ref={underlineRefTwo}/></span></p>
                    </div>
                    <div className='description'>
                        <p>
                            I use the React.js web stack, Java + Spring Boot, and cloud computing services like AWS and Firestore to construct polished and comprehensive enterprise software.
                            I currently work as a developer for a lean and lovable SAAS company out in central NJ.
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