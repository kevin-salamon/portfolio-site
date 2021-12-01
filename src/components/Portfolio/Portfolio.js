import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const StyledPortfolio = styled.div`
    height: 100%;
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    opacity: 1;
    position: relative;
`;

const StyledPortfolioItem = styled.a`
    height: 270px;
    width: 480px;
    margin: 1%;
    background-color: #101017;
    box-shadow: 2px 2px 8px 1px #FFFFFF40;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    opacity: 0;
    text-decoration: none;

    @media (max-width: 1150px) and (orientation: landscape) {
        height: 27%;
        width: 38%;
    }

    &.start-animation {
        animation: 0.5s ease;
        animation-name: slideup;
        animation-iteration-count: 1;

        &.port-one {

        }

        &.port-two {
            // animation-delay: 0.05s;
            animation-delay: 0.1s;
        }

        &.port-three {
            // animation-delay: 0.1s;
            animation-delay: 0.2s;
        }

        &.port-four {
            // animation-delay: 0.15s;
            animation-delay: 0.3s;
        }

        &.port-five {
            // animation-delay: 0.2s;
            animation-delay: 0.4s;
        }

        &.port-six {
            // animation-delay: 0.25s;
            animation-delay: 0.5s;
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

    p {
        margin-block: 0px;
        color: #FFFFFF;
        font-size: 36px;
        font-family: 'Space Mono', monospace;
        text-decoration: none;
    }
`;

function Portfolio() {
    const portRef = useRef();
    const refOne = useRef();
    const refTwo = useRef();
    const refThree = useRef();
    const refFour = useRef();
    const refFive = useRef();
    const refSix = useRef();

    useEffect(() => {
        let topLevelContainer = document.getElementById('top-container');
        topLevelContainer.addEventListener('scroll', () => {
            let experienceContainerTop = document.getElementById('inner-portfolio').getBoundingClientRect().top;
            if (experienceContainerTop <= 500) {
                document.getElementById('port-one').classList.add('start-animation');
                document.getElementById('port-two').classList.add('start-animation');
                document.getElementById('port-three').classList.add('start-animation');
                document.getElementById('port-four').classList.add('start-animation');
                document.getElementById('port-five').classList.add('start-animation');
                document.getElementById('port-six').classList.add('start-animation');
            }
        })
    }, []);

    return (
        <StyledPortfolio ref={portRef} id='inner-portfolio' className='check'>
            <StyledPortfolioItem ref={refOne} id='port-one' className='port-one' onAnimationEnd={() => refOne.current.style.opacity = 1} href="https://github.com/kevin-salamon" target="#">
                <p>Coming Soon</p>
            </StyledPortfolioItem>
            <StyledPortfolioItem ref={refTwo} id='port-two' className='port-two' onAnimationEnd={() => refTwo.current.style.opacity = 1} href="https://github.com/kevin-salamon" target="#">
                <p>Coming Soon</p>
            </StyledPortfolioItem>
            <StyledPortfolioItem ref={refThree} id='port-three' className='port-three' onAnimationEnd={() => refThree.current.style.opacity = 1} href="https://github.com/kevin-salamon" target="#"> 
                <p>Coming Soon</p>
            </StyledPortfolioItem>
            <StyledPortfolioItem ref={refFour} id='port-four' className='port-four' onAnimationEnd={() => refFour.current.style.opacity = 1} href="https://github.com/kevin-salamon" target="#">
                <p>Coming Soon</p>
            </StyledPortfolioItem>
            <StyledPortfolioItem ref={refFive} id='port-five' className='port-five' onAnimationEnd={() => refFive.current.style.opacity = 1} href="https://github.com/kevin-salamon" target="#">
                <p>Coming Soon</p>
            </StyledPortfolioItem>
            <StyledPortfolioItem ref={refSix} id='port-six' className='port-six' onAnimationEnd={() => refSix.current.style.opacity = 1} href="https://github.com/kevin-salamon" target="#">
                <p>Coming Soon</p>
            </StyledPortfolioItem>
        </StyledPortfolio>
    );
}
  
export default Portfolio;