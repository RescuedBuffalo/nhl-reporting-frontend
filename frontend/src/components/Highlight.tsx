import React from 'react';
import styled from 'styled-components';

const HighlightContainer = styled.section`
    display: flex;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 100%;
`;

const HighlightImage = styled.img`
    width: 50%;
    height: 100%;
    object-fit: cover;
`;

const HighlightText = styled.div`
    padding: 20px;
    h1 {
        font-size: 28px;
        margin-bottom: 10px;
    }
    p {
        font-size: 18px;
        color: #555;
    }
`;

const Highlight: React.FC = () => {
    return (
        <HighlightContainer>
            <HighlightImage src="game_of_week.jpg" alt="Game of the Week" />
            <HighlightText>
                <h1>Game of the Week</h1>
                <p>Exciting game summary...</p>
            </HighlightText>
        </HighlightContainer>
    );
}

export default Highlight;
