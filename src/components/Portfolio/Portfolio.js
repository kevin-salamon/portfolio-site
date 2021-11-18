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
    opacity: 0;
    position: relative;

    &.start-animation {
        animation: 1s ease;
        animation-name: slideup;
        // animation-delay: 0.5s;
        animation-iteration-count: 1;
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
`;

const StyledPortfolioItem = styled.div`
    height: 270px;
    width: 480px;
    margin: 1%;
    background-color: transparent;
    box-shadow: 0px 0px 5px 1px #FFFFFF80;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    .banner {
        width: 100%;
        height: 50px;
        background-color: #FFFFFFBF;

        p {
            color: #3b3b3b;
        }
    }
`;

function Portfolio() {
    const portRef = useRef();

    useEffect(() => {
        let topLevelContainer = document.getElementById('top-container');
        topLevelContainer.addEventListener('scroll', () => {
            let experienceContainer = document.getElementById('inner-portfolio').getBoundingClientRect().top;
            if (experienceContainer <= 500) {
                document.getElementById('inner-portfolio').classList.add('start-animation');
                setTimeout(() => {
                    portRef.current.style.opacity = 1;
                }, 900);
            }
        })
    }, []);

    return (
        <StyledPortfolio ref={portRef} id='inner-portfolio' className='check'>
            <StyledPortfolioItem>
                <div className='banner'>

                </div>
            </StyledPortfolioItem>
            <StyledPortfolioItem>
                
            </StyledPortfolioItem>
            <StyledPortfolioItem>
                
            </StyledPortfolioItem>
            <StyledPortfolioItem>
                
            </StyledPortfolioItem>
            <StyledPortfolioItem>
                
            </StyledPortfolioItem>
            <StyledPortfolioItem>
                
            </StyledPortfolioItem>
        </StyledPortfolio>
    );
}
  
export default Portfolio;