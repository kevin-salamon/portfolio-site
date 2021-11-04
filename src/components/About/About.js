import React from 'react';
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
                    font-size: 72px;
                    font-family: 'Fredoka One', cursive;
                    color: white;
                    text-shadow: 1px 1px 2px #B2FFD6;
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
                    font-family: 'Fredoka One', cursive;
                    text-shadow: 1px 1px 1px #B2FFD6;
                }
            }

            .description {
                margin-top: 20px;

                p {
                    font-size: 16px;
                    color: white;
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
    return (
        <StyledAbout>
            <div className='about-container'>
                <div className='about-box'>
                    <div className='intro'>
                        <p>Hi, I'm <span>Kevin Salamon</span></p>
                    </div>
                    <div className='tagline'>
                        <p>your friendly neighborhood <span>Software Engineer.</span></p>
                    </div>
                    <div className='description'>
                        <p>
                            I use the React.js web stack, Java + Spring Boot, and cloud computing services like AWS and Firestore to construct polished and comprehensive enterprise software.
                            I currently work as a developer for a lean and lovable SAAS company out in central NJ.
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