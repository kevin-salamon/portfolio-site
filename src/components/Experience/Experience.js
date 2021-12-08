import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledExperience = styled.div`
    height: 100%;
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    .centering-box {
        height: 90%;
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;

        @media (max-width: 450px) and (orientation: portrait) {
            
        }

        .intro {
            height: 10%;
            width: 100%;

            p {
                margin-block: 0px;
                font-size: 38px;
                font-family: 'Space Mono', monospace;
                color: #B2FFD6;
            }
        }

        .job {
            height: 33.33%;
            width: 100%;
            display: flex;
            align-items: center;
            position: relative;
            opacity: 0;

            &.start-animation {
                animation: 1s ease;
                animation-name: slideup;
                animation-iteration-count: 1;

                &.job-one {

                }

                &.job-two {
                    animation-delay: 0.1s;
                }

                &.job-three {
                    animation-delay: 0.2s;
                }
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

            .inner {
                width: 60%;
                height: 90%;
                // position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                @media (max-width: 1150px) and (orientation: landscape) {
                    width: 65%;
                }

                @media (orientation: portrait) {
                    width: 80%;
                }

                @media (max-width: 450px) and (orientation: portrait) {
                    height: 100%;
                    width: 100%;
                }

                .name-date {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: row;
                    height: 60px;
                    width: 100%;

                    @media (max-width: 1150px) and (orientation: landscape) {
                        height: 45px;
                    }

                    @media (max-width: 450px) and (orientation: portrait) {
                        height: 35px;
                    }
                    
                    .name {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        height: 100%;
                        width: 50%;

                        @media (orientation: portrait) {
                            width: 60%;
                        }

                        div {
                            height: 50%;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: flex-start;

                            @media (max-width: 1150px) and (orientation: landscape) {
                                align-items: flex-start;
                            }

                            @media (max-width: 450px) and (orientation: portrait) {
                                align-items: flex-start;
                            }

                            p {
                                margin-block: 0px;
                                font-size: 24px;
                                color: white;
                                font-family: 'Merriweather Sans', sans-serif;

                                @media (max-width: 1367px) and (orientation: landscape) {
                                    font-size: 22px;
                                }

                                @media (max-width: 1150px) and (orientation: landscape) {
                                    font-size: 18px;
                                }

                                @media (orientation: portrait) and (max-width: 950px) {
                                    font-size: 18px;
                                }

                                @media (max-width: 450px) and (orientation: portrait) {
                                    font-size: 12px;
                                }
                            }

                            span {
                                margin-block: 0px;
                                font-size: 18px;
                                color: #B2FFD6;
                                font-family: 'Space Mono', monospace;
                                font-style: italic;

                                @media (max-width: 1367px) and (orientation: landscape) {
                                    font-size: 18px;
                                }

                                @media (max-width: 1150px) and (orientation: landscape) {
                                    font-size: 14px;
                                }

                                @media (orientation: portrait) and (max-width: 950px) {
                                    font-size: 16px;
                                }

                                @media (max-width: 450px) and (orientation: portrait) {
                                    font-size: 9px;
                                }
                            }
                        }
                    }

                    .date {
                        display: flex;
                        align-items: flex-start;
                        justify-content: flex-end;
                        height: 100%;
                        width: 50%;

                        @media (orientation: portrait) {
                            width: 40%;
                        }

                        @media (max-width: 450px) and (orientation: portrait) {
                            
                        }

                        p {
                            margin-block: 0px;
                            font-size: 18px;
                            color: #B2FFD6;
                            font-family: 'Space Mono', monospace;
                            font-style: italic;

                            @media (max-width: 1367px) and (orientation: landscape) {
                                font-size: 18px;
                            }

                            @media (max-width: 1150px) and (orientation: landscape) {
                                font-size: 14px;
                            }

                            @media (orientation: portrait) and (max-width: 950px) {
                                font-size: 16px;
                            }

                            @media (max-width: 450px) and (orientation: portrait) {
                                font-size: 9px;
                                text-align: center;
                            }
                        }
                    }
                }

                .description {
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;
                    height: calc(100% - 60px);
                    width: 100%;

                    p {
                        margin-block: 0px;
                        font-size: 20px;
                        color: white;
                        font-family: 'Open Sans', sans-serif;
                        letter-spacing: 0.5px;

                        @media (max-width: 1367px) and (orientation: landscape) {
                            font-size: 20px;
                        }

                        @media (max-width: 1150px) and (orientation: landscape) {
                            font-size: 13px;
                        }

                        @media (orientation: portrait) and (max-width: 950px) {
                            font-size: 15px;
                        }

                        @media (max-width: 450px) and (orientation: portrait) {
                            font-size: 11px;
                        }
                    }
                }
            }
        }

        .job-one {
            justify-content: flex-start;
        }

        .job-two {
            justify-content: flex-end;
        }

        .job-three {
            justify-content: flex-start;
        }
    }
`;

function Experience() {
    
    const refOne = useRef();
    const refTwo = useRef();
    const refThree = useRef();

    useEffect(() => {
        let topLevelContainer = document.getElementById('top-container');
        topLevelContainer.addEventListener('scroll', () => {
            let jobBox = document.getElementById('job-box').getBoundingClientRect().top;
            if (jobBox <= 500) {
                document.getElementById('job-one').classList.add('start-animation');
                document.getElementById('job-two').classList.add('start-animation');
                document.getElementById('job-three').classList.add('start-animation');
            }
        })
    }, []);

    return (
        <StyledExperience>
            <div className='centering-box' id='job-box'>
                <div className='job job-one' ref={refOne} id='job-one' onAnimationEnd={() => refOne.current.style.opacity = 1}>
                    <div className='inner'>
                        <div className='name-date'>
                            <div className='name'>
                                <div>
                                    <p>Software Engineer</p>
                                </div>
                                <div>
                                    <span>F2B Services</span>
                                </div>
                            </div>
                            <div className='date'>
                                <p>August 2020 - Present</p>
                            </div>
                        </div>
                        <div className='description'>
                            <p>
                                In my current position, I work within a small, tight-knit software team. Together we've created and maintained the company's portfolio of sales, training, 
                                and event products, using technology like React/Redux, Node.js, .NET, AWS, and Firestore/Firebase. At F2B, I've cut my teeth in software,  and continue to learn
                                more everyday - while making lifelong friends in the process.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='job job-two' ref={refTwo} id='job-two' onAnimationEnd={() => refTwo.current.style.opacity = 1}>
                    <div className='inner'>
                        <div className='name-date'>
                            <div className='name'>
                                <div>
                                    <p>Software Development Tutor</p>
                                </div>
                                <div>
                                    <span>2U, Inc.</span>
                                </div>
                            </div>
                            <div className='date'>
                                <p>June 2020 - February 2021</p>
                            </div>
                        </div>
                        <div className='description'>
                            <p>
                                While working for 2U, I put my coding self-learning to good use to teach others the joys of software development. On any given week, I would be hosting anywhere
                                from 1 to 20 hour-long coding tutorial sessions, helping bootcamp students with topics ranging anywhere from basic CSS to SQL, Node.js, or React. 
                                They say the best way to learn is to teach - and so I learned quite a bit from this role.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='job job-three' id='job-three' ref={refThree} onAnimationEnd={() => refThree.current.style.opacity = 1}>
                    <div className='inner'>
                        <div className='name-date'>
                            <div className='name'>
                                <div>
                                    <p style={{fontStyle: 'italic'}}>life before software...</p>
                                </div>
                                <div>
                                    <span></span>
                                </div>
                            </div>
                            <div className='date'>
                                <p>Before 2018</p>
                            </div>
                        </div>
                        <div className='description'>
                            <p>
                                Surprisingly enough, before I got interested in coding, I was doing legal work - I graduated with a Political Science degree and worked in law firms for
                                close to two years. The story of that transition is a long one, but the attention to detail I gained from hours of preparing law suits and poring over court
                                documents has been invaluable in my growth as a software engineer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </StyledExperience>
    );
}
  
export default Experience;