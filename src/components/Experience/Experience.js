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
                                color: white;
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
                            color: white;
                            font-family: 'Space Mono', monospace;
                            font-style: italic;
                        }
                    }
                }

                .description {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: calc(100% - 60px);
                    width: 100%;
                    background-color: yellow;
                }
            }
        }

        .job-one {
            height: 35%;
            justify-content: flex-start;

            .inner {
                // right: 5%;
            }
        }

        .job-two {
            height: 30%;
            justify-content: flex-end;

            .inner {
                // right: 22.5%;
            }
        }

        .job-three {
            height: 30%;
            justify-content: flex-start;

            .inner {
                // right: 40%;
            }
        }
    }
`;

function Experience() {
    return (
        <StyledExperience>
            <div className='centering-box'>
                {/* <div className='intro'>
                    <p>Experience</p>
                </div> */}
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
                                    <span>U2, Inc.</span>
                                </div>
                            </div>
                            <div className='date'>
                                <p>June 2020 - February 2021</p>
                            </div>
                        </div>
                        <div className='description'>
                            
                        </div>
                    </div>
                </div>
                <div className='job job-three'>
                    <div className='inner'>
                        <div className='name-date'>
                            <div className='name'>
                                <div>
                                    <p></p>
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