import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

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

        .top {
            height: 30%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                font-size: 44px;
                font-family: 'Merriweather Sans', sans-serif;
                color: white;
                position: relative;
                letter-spacing: 0.5px;
            }
        }

        .description {
            height: 70%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;

            p {
                font-size: 24px;
                color: #B2FFD6;
                font-family: 'Space Mono', monospace;
                position: relative;
                text-align: center;
            }

            span {
                font-size: 26px;
                color: white;
                font-family: 'Space Mono', monospace;
                position: relative;
                text-align: center;
                text-decoration: underline;
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
            }
        }
    }
`;

function Contact() {

    return (
        <StyledContact>
            <div className='centering-box'>
                <div className='top'>
                    <p>WANT TO REACH OUT?</p>
                </div>
                <div className='description'>
                    <p>
                        I'm always looking to hear new ideas, make connections, or talk about collaborating on a cool project!
                        If you'd like to talk more, shoot me an email at <span>theksalamon@gmail.com,</span> or send me a message on <a href="https://www.linkedin.com/in/kevin-salamon/">Linkedin</a>.
                    </p>
                </div>
            </div>
        </StyledContact>
    );
}
  
export default Contact;