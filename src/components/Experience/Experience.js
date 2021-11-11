import React from 'react';
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

            .inner {
                width: 60%;
                height: 90%;
                // position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                .name-date {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: row;
                    height: 60px;
                    width: 100%;
                    
                    .name {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        height: 100%;
                        width: 50%;

                        div {
                            height: 50%;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: flex-start;

                            p {
                                margin-block: 0px;
                                font-size: 24px;
                                color: white;
                                font-family: 'Merriweather Sans', sans-serif;
                            }

                            span {
                                margin-block: 0px;
                                font-size: 18px;
                                color: #B2FFD6;
                                font-family: 'Space Mono', monospace;
                                font-style: italic;
                            }
                        }
                    }

                    .date {
                        display: flex;
                        align-items: flex-start;
                        justify-content: flex-end;
                        height: 100%;
                        width: 50%;

                        p {
                            margin-block: 0px;
                            font-size: 18px;
                            color: #B2FFD6;
                            font-family: 'Space Mono', monospace;
                            font-style: italic;
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
    return (
        <StyledExperience>
            <div className='centering-box'>
                <div className='job job-one'>
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
                <div className='job job-two'>
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
                <div className='job job-three'>
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

                            </div>
                        </div>
                        <div className='description'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </StyledExperience>
    );
}
  
export default Experience;