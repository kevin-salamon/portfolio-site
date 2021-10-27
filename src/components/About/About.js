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
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;

        .about-box {
            height: 75%;
            width: 90%;
            background-color: #32013b;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            div {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            p {
                margin-block: 0px;
                color: #B2FFD6;
            }
        }
    }

    .portrait-container {
        height: 100%;
        width: 40%;
        // background-color: blue;
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

                    </div>
                    <div className='tagline'>
                        
                    </div>
                    <div className='description'>
                        
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