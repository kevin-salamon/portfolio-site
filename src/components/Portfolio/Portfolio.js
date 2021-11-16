import React from 'react';
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
`;

const StyledPortfolioItem = styled.div`
    height: 270px;
    width: 480px;
    margin: 1%;
    background-color: #B2FFD6;

`;

function Portfolio() {
    return (
        <StyledPortfolio>
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
            <StyledPortfolioItem>
                
            </StyledPortfolioItem>
        </StyledPortfolio>
    );
}
  
export default Portfolio;