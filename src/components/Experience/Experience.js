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
            height: 30%;
            width: 100%;
            display: flex;
            align-items: center;
            position: relative;

            .inner {
                width: 60%;
                height: 90%;
                position: absolute;
                border: 1px solid white;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                .name-date {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: row;
                    height: 20%;
                    width: 100%;
                    
                    .name {
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        height: 100%;
                        width: 50%;
                        background-color: white;
                    }

                    .date {
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        height: 100%;
                        width: 50%;
                        background-color: black;
                    }
                }

                .description {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 80%;
                    width: 100%;
                    background-color: yellow;
                }
            }
        }

        .job-one {
            .inner {
                right: 5%;
            }
        }

        .job-two {
            .inner {
                right: 22.5%;
            }
        }

        .job-three {
            .inner {
                right: 40%;
            }
        }
    }
`;

function Experience() {
    return (
        <StyledExperience>
            <div className='centering-box'>
                <div className='intro'>
                    <p>Experience</p>
                </div>
                <div className='job job-one'>
                    <div className='inner'>
                        <div className='name-date'>
                            <div className='name'>

                            </div>
                            <div className='date'>

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

                            </div>
                            <div className='date'>

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